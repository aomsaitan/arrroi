import React, {Component} from "react";
import getImage from "../database/getImage";
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
					id={this.props.nameOfProduct}
					alt={this.props.nameOfProduct}
				/>

				<div className="productDetail">
					<u className="nameOfProduct">{this.props.nameOfProduct}</u>
					{this.props.match.url.includes("menu") ? (
						<p>
							จำนวนที่ใช้ตามสูตร &nbsp;&nbsp;&nbsp;{" "}
							{this.props.used}
							&nbsp;&nbsp;&nbsp; {this.props.used2}
						</p>
					) : null}
					<div style={{wordWrap:"break-word"}}>
                        {this.props.detail}
					</div>
					<p>
						ราคา &nbsp;&nbsp;&nbsp; {this.props.price}
						&nbsp;&nbsp;&nbsp; บาท
					</p>
					<form name="formAddDecrease" autoComplete="off">
						<label htmlFor="button">จำนวน</label> &nbsp;
						<Input
							pass={this.getData}
							id="button"
							default={
								this.props.quantity ? this.props.quantity : 1
							}
                            maxLength="3"
                            multiplier ={this.props.unitOfProduct === "กรัม" ? 50 : 1}
						/>
						{this.props.unitOfProduct}
					</form>
					{this.props.type === "x" ? (
						<img
							style={{
								width: "2.3vw",
								float: "right",
								cursor: "pointer",
							}}
							src="https://firebasestorage.googleapis.com/v0/b/ingredient-cfs.appspot.com/o/Icon%2Ftrash.png?alt=media&token=c7d589fa-b416-40b3-9522-5ba740170e14"
							alt="trash"
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
							<img
								className="cartImg"
								src="https://firebasestorage.googleapis.com/v0/b/ingredient-cfs.appspot.com/o/Icon%2FcartW.png?alt=media&token=ed4b4811-80bf-4c4a-adb5-8a7dff0f0bbd"
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
