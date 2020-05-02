import React, {Component} from "react";
import firebase from "../database/firebase";
import {connect} from "react-redux";
import OrderDetailField from "./OrderDetailField";
import Loading from "./Loading";
import {removeCart, importCartList} from "../redux/index";
import {Redirect} from "react-router-dom";
import EmptyOrder from "./EmptyOrder";

class MyHistory extends Component {
	constructor(props) {
		super(props);

		this.state = {loading: true};
	}
	componentDidMount = async () => {
		await this.importCart();
	};
	importCart = async () => {
		let query = firebase.firestore().collection("cart");
		await query
			.doc(this.props.cart_id)
			.get()
			.then((documentsnapshot) => {
				this.props.importCartList(documentsnapshot.data().cartlist);
			});
		this.setState({loading: false});
	};
	deleteCart = async (event) => {
		let x = parseInt(event.target.id.split(" ")[0]);
		let query = firebase.firestore().collection("cart");
		// let carttmp = ;
		// console.log(carttmp);
		await this.props.removeCart(x);
		console.log(this.props.cartList);
		await query
			.doc(this.props.cart_id)
			.set({cartlist: this.props.cartList});
	};
    render() {
        console.log(this.props.cartList);
        if (this.props.isLoggedIn)
            if (this.props.cartList !== undefined && this.props.cartList.length >1)            
				if (!this.state.loading)
					return (
						<div className="textS">
							<h1 align="center" style={{fontSize: "4vw"}}>
								รายการสินค้าที่สั่งซื้อ
							</h1>
							{this.props.cartList.map((cart, i) => {
								if (cart.productlist.length !== 0 && cart.payment_status)
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
													onClick={this.deleteCart}
													className="login"
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
			else return <EmptyOrder />;
		else return <Redirect to="/login" />;
	}
}
const mapStateToProps = (state) => {
	return {
		cart_id: state.addToCartReducer.id,
		cartList: state.addToCartReducer.cartList,
		isLoggedIn: state.loginReducer.isLoggedIn,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		removeCart: (index) => dispatch(removeCart(index)),
		importCartList: (product) => dispatch(importCartList(product)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(MyHistory);
