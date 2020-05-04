import React, {Component} from "react";
import firebase from "../database/firebase";
import {connect} from "react-redux";
import {compose} from "redux";
import Loading from "./Loading";
import {updateShop} from "../redux/index";
import {Redirect} from "react-router-dom";
import EmptyOrder from "./EmptyOrder";
import EmptyBuy from "./EmptyBuy";
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
            tmp:false
		};
	}
	componentDidMount = async () => {
		window.scrollTo(0, 0);
		if (this.props.store_id) {
			await this.importPayment();
			await this.getStoreName();
		}
	};
	getStoreName = async () => {
        console.log('getStorename')
		let query = firebase.firestore().collection("store");
		await query
			.doc(this.props.store_id)
			.get()
			.then((documentsnapshot) => {
				this.setState({store: documentsnapshot.data().name});
			});
	};
	fetchProduct = async (product) => {
		let query = firebase.firestore().collection("product");
		await query
			.doc(product.id.split(" ")[0])
			.get()
			.then((documentsnapshots) => {
				if (documentsnapshots.data().store_id === this.props.store_id) {
					this.setState(
						(prevState) => {
							return {
								...prevState,
								tmp: true,
								productList: [
									...prevState.productList,
									product,
								],
							};
						},
						() => {
							console.log(this.state.productList, "productList",this.state.tmp);
						}
                    );
				}
			})
			.catch((e) => {
				console.log(e.message);
			});
	};
	fetchUserDetail = async (cart_id) => {
		let query = firebase.firestore().collection("user");
		await query
			.where("cartid", "==", cart_id)
			.limit(1)
			.get()
			.then((querysnapshot) => {
				querysnapshot.forEach((documentsnapshot) => {
					this.setState(
						{
							userDetail: documentsnapshot.data(),
						},
						() => {
							console.log(this.state.userDetail, "userDetail");
						}
					);
					// return null;
				});
			})
			.catch((e) => {
				console.log(e.message);
			});
	};
	pushCart =  () => {
		console.log(this.state.tmp, "tmp");
		// if (this.state.tmp) {
		this.setState(
			(prevState) => {
				return {
					...prevState,
					cart: [...prevState.cart, this.state.productList],
				};
			},
			() => {
				console.log(this.state.cart, "cart");
			}
		);
		// return null;
		// }
	};
	summary =  () => {
		if (this.state.productList.length > 0) {
			this.setState(
				(prevState) => {
					return {
						...prevState,
						orderList: [
							...prevState.orderList,
							{
								userDetail: prevState.userDetail,
								cartList: prevState.cart,
							},
						],
					};
				},
				() => {
					console.log(this.state.orderList, "orderList");
				}
			);
			// return null;
		}
	};
	importPayment = async () => {
		let query = firebase.firestore().collection("cart");
		console.log(this.state.orderList, "555555555555");
		await query
			.get()
			.then((querysnapshot) => {
				querysnapshot.forEach(async (cartlists) => {
					//cartlist
					this.setState({cart: []});
					await this.fetchUserDetail(cartlists.id);
					cartlists.data().cartlist.forEach(async (cart) => {
						//cart
						this.setState({
							productList: [],
							tmp: false,
						});
						if (cart.payment_status && !cart.shop_check) {
							cart.productlist.forEach(async (product) => {
								//product
								await this.fetchProduct(product);
							});
							console.log(this.state.tmp, "tmp");
							if (this.state.tmp) this.pushCart();
						}
					})
					 this.summary();
				});
				this.setState({loading: false});
			})
			.catch((e) => {
				console.log(e.message);
			});
	};
	render() {
		console.log(this.state.orderList, "dsdfada");
		if (this.props.isLoggedIn)
			if (this.state.orderList && this.state.orderList.length > 0)
				if (!this.state.loading)
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
											i % 2 == 0 ? "light-brown" : "brown"
										}
										onClick={() => {
											this.props.updateShop(
												this.state.orderList
											);
											this.props.history.push(
												"/" +
													this.props.username +
													"/sales/" +
													order.userDetail.name
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
				else return <Loading />;
			else return <EmptyOrder />;
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
