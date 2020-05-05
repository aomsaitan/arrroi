import React, {Component} from "react";
import firebase from "../database/firebase";
import {connect} from "react-redux";
import {compose} from "redux";
import Loading from "./Loading";
import {updateShop} from "../redux/index";
import {Redirect} from "react-router-dom";
import EmptyOrder from "./EmptyOrder";
import {withRouter} from "react-router-dom";
import MyHistoryField from "./MyHistoryField";

class MySalesList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			orderList: [],
			productList: [],
			cart: [],
			store: "",
			userDetail: "",
			tmp: false,
			realCartIndex: "",
			alt: true,
		};
	}
	componentDidMount = async () => {
		window.scrollTo(0, 0);
		if (this.props.store_id) {
			await this.importPayment();
			await this.getStoreName();
			this.setState({loading: false});
		}
	};
	getStoreName = async () => {
		console.log("getStorename");
		let query = firebase.firestore().collection("store");
		await query
			.doc(this.props.store_id)
			.get()
			.then((documentsnapshot) => {
				this.setState({store: documentsnapshot.data().name});
			});
	};
	summary = async (cart_id) => {
		if (this.state.cart.length > 0) {
			let query = firebase.firestore().collection("user");
			await query
				.where("cartid", "==", cart_id)
				.limit(1)
				.get()
				.then((querysnapshot) => {
					querysnapshot.forEach((documentsnapshot) => {
						this.setState(
							(prevState) => {
								return {
									...prevState,
									orderList: [
										...prevState.orderList,
										{
											userDetail: documentsnapshot.data(),
											userId: documentsnapshot.id,
											cartList: prevState.cart,
										},
									],
									loading: false,
									alt: false,
								};
							}
						);
					});
				})
				.catch((e) => {
					console.log(e.message);
				});
		}
	};
	importPayment = async () => {
		let query = firebase.firestore().collection("cart");
		let productList = [];
		await query
			.get()
			.then((querysnapshot) => {
				// for (const x in querysnapshot) {
				// 	console.log("querere", x);
				// }
				querysnapshot.forEach(async (cartlists) => {
					//cartlist
                    this.setState({cart: []});
                    console.log(cartlists.data().cartlist,'fdfffffff')
                    for (const [i, cart] of cartlists.data().cartlist.entries()) {
                        let productList = [];
                        if (cart.payment_status && !cart.shop_check) {
                            for (const product of cart.productlist) {
                                let query = firebase.firestore().collection("product");
                                await query
                                    .doc(product.id.split(" ")[0])
                                    .get()
                                    .then((documentsnapshots) => {
                                        if (
                                            documentsnapshots.data().store_id ===
                                            this.props.store_id
                                        ) {
                                            this.setState((prevState) => {
                                                productList.push(product);
                                                return {
                                                    ...prevState,
                                                    tmp: true,
                                                    productList: [
                                                        ...prevState.productList,
                                                        product,
                                                    ],
                                                };
                                            });
                                        }
                                    })
                                    .catch((e) => {
                                        console.log(e.message);
                                    });
                            }
                            if (this.state.tmp) {
                                let s = {
                                    productList: productList,
                                    shop_check: cart.shop_check,
                                    realCartIndex: i,
                                };
                                this.setState((prevState) => {
                                    return {
                                        ...prevState,
                                        cart: [...prevState.cart, s],
                                    };
                                });
                            }
                            this.setState({
                                tmp: false,
                                productList: [],
                            });
                        }
                        console.log("last", this.state.cart);
                    }
					this.summary(cartlists.id);
				});
			})
			.catch((e) => {
				console.log(e.message);
			});
	};
	render() {
		console.log(this.state.loading, "dsdfada", this.state.orderList);
		if (this.props.isLoggedIn)
			if (this.state.orderList && this.state.orderList.length > 0)
				return (
					<div className="textS">
						<h1 align="center" style={{fontSize: "4vw"}}>
							{this.state.store}
						</h1>
						<div className="MySales textS">การขายของฉัน</div>
						{this.state.orderList.map((order, i) => {
							return (
								<MyHistoryField
									color={
										i % 2 === 0 ? "light-brown" : "brown"
									}
									onClick={() => {
										this.props.updateShop(
											this.state.orderList
										);
										this.props.history.push(
											"/" +
												this.props.username +
												"/sales/" +
												order.userId
										);
									}}
									type="clickable"
									key={i + " payment"}
									name={
										order.userDetail.name +
										" " +
										order.userDetail.surname
									}
									phone={order.userDetail.phone}
									email={order.userDetail.email}
									address={order.userDetail.address}
								/>
							);
						})}
						<div style={{marginBottom: "calc(0vw + 1%)"}}></div>
					</div>
				);
			else if (
				(!this.state.loading &&
					this.state.orderList &&
					this.state.orderList.length === 0) ||
				!this.state.alt
			)
				return <EmptyOrder />;
			else return <Loading />;
		else return <Redirect to="/login" />;
	}
}
const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.loginReducer.isLoggedIn,
		store_id: state.shopReducer.store_id,
		orderList: state.shopReducer.orderList,
		username: state.loginReducer.username,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		updateShop: (order) => dispatch(updateShop(order)),
	};
};
export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter
)(MySalesList);
