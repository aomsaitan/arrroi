import React, {Component} from "react";
import BuyProduct from "./BuyProduct";

class ShoppingCart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			productList: "",
			price: "",
		};
	}

	render() {
		return (
			<div>
				<h1>รถเข็นของฉัน</h1>
				<BuyProduct />
			</div>
		);
	}
}

export default ShoppingCart;
