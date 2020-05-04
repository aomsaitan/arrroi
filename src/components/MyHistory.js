import React, {Component} from "react";
import firebase from "../database/firebase";
import {connect} from "react-redux";
import {compose} from "redux";
import OrderDetailField from "./OrderDetailField";
import Loading from "./Loading";
import {removeCart, importCartList, updateShop} from "../redux/index";
import {Redirect} from "react-router-dom";
import EmptyBuy from "./EmptyBuy";
import {withRouter} from "react-router-dom";

class MyHistory extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
		};
	}
	componentDidMount = async () => {
		window.scrollTo(0, 0);
		await this.importCart();
	};
	importCart = async () => {
		let query = firebase.firestore().collection("cart");
		await query
			.doc(this.props.cart_id)
			.get()
			.then((documentsnapshot) => {
				this.props.importCartList(documentsnapshot.data().cartlist);
			})
			.catch((e) => {
				console.log(e.message);
			});
		this.setState({loading: false});
	};
	deleteCart = async (event) => {
		let x = parseInt(event.target.id.split(" ")[0]);
		let query = firebase.firestore().collection("cart");
		await this.props.removeCart(x);
		await query
			.doc(this.props.cart_id)
			.set({cartlist: this.props.cartList})
			.catch((e) => {
				console.log(e.message);
			});
	};
	render() {
		let cart_count = 0;
		if (this.props.isLoggedIn)
			if (this.props.cartList) {
				for (let i = 0; i < this.props.cartList.length; i++) {
					if (this.props.cartList[i].customer_check) cart_count += 1;
                }
                // console.log(cart_count,this.props.cartList.length,'safdsadfd')
				if (cart_count !== this.props.cartList.length-1)
					if (!this.state.loading)
						return (
							<div className="textS">
								<h1 align="center" style={{fontSize: "4vw"}}>
									{this.props.username}
								</h1>
								<div className="MySales textS">
									การซื้อของฉัน
								</div>
								{this.props.cartList.map((cart, i) => {
									if (
										cart.productlist.length !== 0 &&
										cart.payment_status &&
										!cart.customer_check
									)
										return (
											<div key={i + " order"}>
												{cart.productlist.map(
													(product, i) => {
														return (
															<div
																key={
																	product.id +
																	"order" +
																	i
																}
															>
																<OrderDetailField
																	nameFood={
																		product.name
																	}
																	size={
																		product.size
																	}
																	price={
																		product.price
																	}
																	quantity={
																		product.quantity
																	}
																></OrderDetailField>
															</div>
														);
													}
												)}
												<div align="center">
													<button
														onClick={
															this.deleteCart
														}
														className="login textS"
														style={{
															width: "auto",
															padding: "0.5vw",
															fontSize: "1.8vw",
															marginTop: "2vw",
															marginBottom: "2vw",
														}}
														id={i + " order"}
													>
														ฉันได้ตรวจสอบว่าได้รับสินค้าแล้ว
													</button>
												</div>
											</div>
										);
								})}
							</div>
						);
					else return <Loading />;
				else return <EmptyBuy />;
			} else return <EmptyBuy />;
		else return <Redirect to="/login" />;
	}
}
const mapStateToProps = (state) => {
	return {
		cart_id: state.addToCartReducer.id,
		cartList: state.addToCartReducer.cartList,
		isLoggedIn: state.loginReducer.isLoggedIn,
		username: state.loginReducer.username,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		removeCart: (index) => dispatch(removeCart(index)),
		importCartList: (product) => dispatch(importCartList(product)),
	};
};
export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter
)(MyHistory);
