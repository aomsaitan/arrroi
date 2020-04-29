import React, {Component} from "react";
import Shop from "./Shop";
import getImage from "../database/getImage";
import firebase from "../database/firebase";
import Loading from './Loading'
class ShopPage extends Component {
	constructor() {
		super();
		this.state = {
			store: "",
		};
	}
	componentDidMount = async () => {
		await this.importdata();
	};
	importdata = async () => {
		let tmp = [];
		let db = firebase.firestore();
		await db
			.collection("store")
			.orderBy("star", "desc")
			.get()
			.then((querysnapshot) => {
				querysnapshot.forEach((documentsnapshot) => {
					tmp.push(documentsnapshot.data());
				});
				this.setState({
					store: tmp,
				});
			})
			.catch(function (error) {
				console.log("Error", error);
			});
	};
	render() {
		if (this.state.store !== "") {
			return (
				<>
					<h1 className="textS shop-title"> ร้านค้าแนะนำ </h1>
					{this.state.store.map((store) => {
						return (
							<Shop
								nameFood={store.name}
								detail={store.detail}
								star={store.star}
								address={store.address}
							/>
						);
					})}
				</>
			);
		} else {
			return <Loading />
		}
	}
}
export default getImage(ShopPage);
