import React, {Component} from "react";
import BuyProduct from "./BuyProduct";
import เนื้อสันในวัว from "../images/เนื้อสันในวัว.jpg";

class Cart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			productList: [
				{
					name: "เนื้อสันในวัว 150 กรัม",
					price: 99,
					unit: "ถุง",
					quantity: 10,
				},
				{
					name: "เนื้อสันในวัว 150 กรัม",
					price: 99,
					unit: "ถุง",
					quantity: 10,
				},
				{
					name: "เนื้อสันในวัว 150 กรัม",
					price: 99,
					unit: "ถุง",
					quantity: 10,
				},
			],
			totalPrice: 0,
			paymentStatus: false,
		};
    }
    sendCart = () => {
        //send to database
    }
    componentDidMount = () => {
        //database
    }
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
        console.log(this.state)
		return (
			<div className="textS">
				<h1
					align="center"
					style={{fontSize: "4vw", marginBottom: "1vw"}}
				>
					รถเข็น
				</h1>
				{this.state.productList.map((product, i) => {
					return (
						<BuyProduct
							nameOfProduct={product.name}
							color={i % 2 === 0 ? "brown" : "cream"}
							price={product.price}
							key={i}
							unitOfProduct={product.unit}
							imgFood={เนื้อสันในวัว}
							type="x"
							imgType="trash"
							quantity={product.quantity}
							match={this.props.match}
							calculatePrice={this.calculatePrice}
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

export default Cart;
