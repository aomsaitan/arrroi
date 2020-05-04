import React, {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import OrderDetailField from "./OrderDetailField";
import firebase from "../database/firebase";

class MySales extends Component {
	constructor(props) {
		super(props);
	}

	deleteCart = async () => {
		let query = firebase.firestore().collection("cart");
		let cart_list = [];
		await query
			.doc(this.props.orderList.userDetail.cartid)
			.get()
			.then((documentsnapshop)=>{})
			.catch((e) => {
				console.log(e.message);
			});
	};

    render() {
        console.log('what',this.props.orderList)
		return (
			<div className="textS">
				<h1 align="center" style={{fontSize: "4vw"}}>
					{this.props.match.params.customer}
				</h1>
				<div className="MySales textS">การขายของฉัน</div>
				{this.props.orderList.map((order, i) => {
					if (
						order.userDetail.name ===
						this.props.match.params.customer
					) {
						return order.productList.map((product, i) => {
							return (
								<OrderDetailField
									nameFood={product.name}
									size={product.size}
									price={product.price}
									quantity={product.quantity}
									key={product.id}
								></OrderDetailField>
							);
						});
					}
					return null;
				})}
				<div align="center">
					<button
						onClick={this.deleteCart}
						className="login textS"
						style={{
							width: "auto",
							padding: "0.5vw",
							fontSize: "1.8vw",
							marginTop: "2vw",
							marginBottom: "2vw",
						}}
					>
						ฉันได้ตรวจสอบและส่งสินค้าแล้ว
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		orderList: state.shopReducer.orderList,
		username: state.loginReducer.username,
	};
};
export default compose(connect(mapStateToProps), withRouter)(MySales);
