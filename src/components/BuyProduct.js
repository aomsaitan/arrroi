import React, {Component} from "react";
import getImage from "../database/getImage";
import Input from "./Input";
import {addToCart} from "../redux/index";
import {connect} from "react-redux";
import {compose} from "redux";

class BuyProduct extends Component {
	constructor(props) {
		super(props);
		// console.log(this.props.option[0].size)
		this.state = {
			size_name: this.props.option[0].size,
			quantity: this.props.quantity ? this.props.quantity:1,
			size: this.props.size
				? this.props.option.findIndex(
						(item) => item.size === this.props.size
				  )
				: 0,
		};
	}
	getData = (e, data) => {
		this.setState({
			quantity: data,
		});
	};
	addItem = () => {
		let product = {
			name: this.props.nameOfProduct,
			size: this.state.size_name,
			price:
				this.props.option[this.state.size].price * this.state.quantity,
			quantity: parseInt(this.state.quantity),
			option: this.props.option,
		};
		console.log(product);
		this.props.addToCart(product);
	};
	componentDidMount = () => {
		let x = document.getElementsByName("radio " + this.props.nameOfProduct);
		// console.log(x)
		x[this.state.size].checked = "checked";
		// console.log('fuck you')
	};
	setSize = () => {
		let x = document.getElementsByName("radio " + this.props.nameOfProduct);
		// console.log("sdfdaddfsdfs", x);
		for (let i = 0; i < x.length; i++) {
			// console.log("111111111", x[i].checked,i);
			if (x[i].checked) {
				this.setState((prevState) => ({
					...prevState,
					size: i,
					size_name: this.props.option[i].size,
				}));
			}
		}
	};
	render() {
		// console.log(this.state);
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
						<span style={{fontSize: "1vw", float: "right"}}>
							จำนวนที่ใช้ตามสูตร {this.props.used}
						</span>
					) : null}
					<div style={{wordWrap: "break-word"}}>
						{this.props.detail}
					</div>
					<p style={{fontSize: "2.2vw", margin: "1vw 0 1vw 0"}}>
						ราคา{" "}
						{this.props.option[this.state.size].price *
							this.state.quantity}{" "}
						บาท
					</p>
					<div
						className="row-flex"
						style={{
							justifyContent: "space-between",
							margin: "0 0 1vw 0",
						}}
					>
						<span>ปริมาณ</span>
						{this.props.option.map((option, i) => {
							return (
								<label key={i}>
									<input
										type="radio"
										name={
											"radio " + this.props.nameOfProduct
										}
										onChange={this.setSize}
										className="radio"
									/>
									<span>{option.size}</span>
								</label>
							);
						})}
					</div>
					<label htmlFor="button">จำนวน</label>&nbsp;&nbsp;
					<Input
						pass={this.getData}
						id="button"
						default={this.props.quantity?this.props.quantity:1}
						maxLength="3"
						multiplier={
							this.props.unitOfProduct === "กรัม" ? 50 : 1
						}
					/>
					{/* หน่วย */}
					{/* {this.props.unitOfProduct} */}
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
							onClick={this.addItem}
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
const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (item) => dispatch(addToCart(item)),
	};
};
export default compose(connect(null, mapDispatchToProps), getImage)(BuyProduct);
