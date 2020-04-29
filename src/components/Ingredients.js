import React, {Component} from "react";
import BuyProduct from "./BuyProduct";
import เนื้อสันในวัว from "../images/เนื้อสันในวัว.jpg";
import firebase from "../database/firebase";
import Loading from "./Loading";
import Image from "./Image";

class Ingredients extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: this.props.match.url.includes("menu") ? "menu" : "shop",
			menu: this.props.match.params.name,
			productList: [],
		};
	}

	componentDidMount = async () => {
		await this.showpdl_menu();
	};

	showpdl_menu = async () => {
		let query = firebase.firestore().collection("menu");
		let query2 = firebase.firestore().collection("product");
		let tmp;
		await query
			.where("name", "==", this.state.menu)
			.get()
			.then((qureysnapshot) => {
				qureysnapshot.forEach((documentsnapshot) => {
					tmp = {
						multiplier: documentsnapshot.data().multiplier,
						productList: documentsnapshot.data().productList,
					};
				});
			});
		console.log(tmp);
		let tmpmenuall = [];
		for (let index = 0; index < tmp.productList.length; index++) {
			await query2
				.doc(tmp.productList[index].product_id)
				.get()
				.then((documentsnapshot) => {
					tmpmenuall.push(documentsnapshot.data());
				});
		}
		let productList = [];
		tmp.productList.forEach((data, index) => {
			productList.push({
				...tmpmenuall[index],
				product_id: data.product_id,
				used: data.quantity.split(" ")[0],
				used2: data.quantity.split(" ")[1],
			});
		});
		this.setState({
			productList: productList,
			multiplier: tmp.multiplier,
		});
	};
	render() {
		console.log(this.state.productList);
		if (this.state.productList !== [])
			return (
				<>
					<Image
						alt="background"
						className="BG"
						nameFood={this.state.menu}
					/>
					{this.state.productList.map((product, i) => {
						return (
							<BuyProduct
								key={product.product_id}
								nameOfProduct={product.name}
								color={i % 2 === 0 ? "brown" : "cream"}
								price={product.price}
								quantity={
									product.unit === "ถุง" ||
									product.unit === "ขวด"
										? null
										: parseInt(product.used)
								}
								unitOfProduct={product.unit}
								nameFood={product.name}
								used={product.used}
								used2={product.used2}
								match={this.props.match}
								detail={product.detail}
							/>
						);
					})}
				</>
			);
		else return <Loading />;
	}
}
export default Ingredients;
