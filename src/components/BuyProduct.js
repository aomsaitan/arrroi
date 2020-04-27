import React, {Component} from "react";
// import cartW from "../images/cartW.png";
import getImage from "../database/getImage";
import Image from "./Image";
import Input from "./Input";

class BuyProduct extends Component {
	constructor() {
		super();
		this.state = {
			quantity: 1,
		};
	}
	getData = (e, data) => {
		this.setState({
			quantity: data,
		});
    };
    componentDidMount= () => {
        this.props.calculatePrice();
    }
	render() {
		return (
			<div
				className="storeBox textS"
				style={
					this.props.color === "brown"
						? {backgroundColor: "#814A2C", color: "white"}
						: {backgroundColor: "#EBC27C", color: "black"}
				}
			>
				<img
					className="imgFood"
					src={this.props.imgFood}
					alt={this.props.nameOfProduct}
				/>

				<div className="productDetail">
					<u className="nameOfProduct">{this.props.nameOfProduct}</u>
					{this.props.match.url.includes("menu") ? (
						<p>
							จำนวนที่ใช้ &nbsp;&nbsp;&nbsp; {this.props.price}
							&nbsp;&nbsp;&nbsp; บาท
						</p>
					) : null}
					<p>
						ราคา &nbsp;&nbsp;&nbsp; {this.props.price}
						&nbsp;&nbsp;&nbsp; บาท
					</p>
					<form name="formAddDecrease" autoComplete="off">
						<label for="button">จำนวน</label> &nbsp;
						<Input
							pass={this.getData}
							id="button"
							default={this.props.quantity?this.props.quantity:1}
							maxLength="3"
						/>
						{this.props.unitOfProduct}
					</form>
					{this.props.type === "x" ? (
						<Image
							style={{
								width: "2.3vw",
								float: "right",
								position: "relative",
								top: "1.5vw",
								left: "-1vw",
								cursor: "pointer",
							}}
							id={this.props.imgType}
							alt="trash"
							// onClick={this.remove}
						/>
					) : (
						<button
							className="addToCartButton textS"
							align="center"
							style={
								this.props.color === "brown"
									? {backgroundColor: "#4A362B"}
									: {backgroundColor: "#814A2C"}
							}
						>
							<Image
								className="cartImg"
								nameIcon="cartW"
								alt="shopping_cart"
							/>
							<span style={{position: "relative", top: "-0.9vw"}}>
								เพิ่มในรถเข็น
							</span>
						</button>
					)}
				</div>
			</div>
		);
	}
}
export default getImage(BuyProduct);
