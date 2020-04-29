import React, {Component} from "react";
import BuyProduct from "./BuyProduct";
import เนื้อสันในวัว from "../images/เนื้อสันในวัว.jpg";
import {addToCart, removeFromCart} from "../redux/index";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

class Cart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// productList: this.props.productList,
			totalPrice: 0,
			paymentStatus: false,
		};
	}
	sendCart = () => {
		//send to database
    };
    // storeCar
	// sendData = () => {
	// 	console.log("dsdadffddadfsdfdsadsdfdadfdsa");
	// 	return null;
	// };
	componentDidMount = () => {
		// window.addEventListener("beforeunload", this.sendData);
		//get from database
		// alert('44')
		//push to redux
	};
	componentWillUnmount = () => {
		// window.removeEventListener("beforeunload", this.sendData);
		// alert('55')
		//send to database
	};
	calculatePrice = () => {
		let result = 0;
		if (this.state.productList !== "") {
			this.state.productList.forEach((element) => {
				result += element.price * element.quantity;
			});
		}
		this.setState({totalPrice: result});
	};
	render() {
		console.log(this.state);
		// this.props.addToCart(1);
		return (
			<div className="textS">
				<h1
					align="center"
					style={{fontSize: "4vw", marginBottom: "1vw"}}
				>
					รถเข็น
				</h1>
				{this.props.productList.map((product, i) => {
					return (
						<BuyProduct
							nameOfProduct={product.name}
							color={i % 2 === 0 ? "brown" : "cream"}
							price={product.price}
							key={i}
							unitOfProduct={product.unit}
							imgFood={เนื้อสันในวัว}
							type="x"
							// imgType="trash"
							quantity={product.quantity}
							match={this.props.match}
							calculatePrice={this.calculatePrice}
							index={i}
						/>
					);
				})}
				<div
					style={{
						fontSize: "2vw",
						marginLeft: "25%",
						marginBottom: "1vw",
					}}
				>
					สรุปรายการสั่งซื้อ
				</div>
				<div style={{fontSize: "1.5vw", marginLeft: "35%"}}>
					<div className="row-flex" style={{marginBottom: "0.75vw"}}>
						<div style={{width: "30%"}}>ยอดรวม</div>
						<div style={{textAlign: "right", width: "15%"}}>
							{this.state.totalPrice}&nbsp;บาท
						</div>
					</div>
					<div className="row-flex" style={{marginBottom: "0.75vw"}}>
						<div style={{width: "30%"}}>ค่าจัดส่ง</div>
						<div style={{textAlign: "right", width: "15%"}}>
							50&nbsp;บาท
						</div>
					</div>
					<div className="row-flex" style={{marginBottom: "0.75vw"}}>
						<div style={{width: "30%"}}>ยอดรวมทั้งสิ้น</div>
						<div style={{textAlign: "right", width: "15%"}}>
							{this.state.totalPrice + 50}&nbsp;บาท
						</div>
					</div>
				</div>
				<button
					className="textS login"
					style={{position: "relative", left: "70vw"}}
				>
					ชำระเงิน
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		productList: state.addToCartReducer.productList,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (item) => dispatch(addToCart(item)),
		removeFromCart: (index) => dispatch(removeFromCart(index)),
	};
};
export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter
)(Cart);
