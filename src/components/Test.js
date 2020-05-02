import React, {Component} from "react";
import firebase from "../database/firebase";
import เนื้อสันในวัว from "../images/เนื้อสันในวัว.jpg";
import BuyProduct from "./BuyProduct";
import store from "../redux/store";

class Test extends Component {
	constructor(props) {
		super(props);
		this.state = {
			store_name: "ออมสินขายเนื้อ",
			store_id: "",
			productlist_store: "",
			productlist_menu: "",
			product_id_store: "",
			product_id_menu: "",
			menu_id: "XZzQTzEAUfKPeuZg847U",
			menu: "",
			cart_id: "",
			cartlist: "",
			username: "sirget",
		};
	}

	componentDidMount = async () => {
		//await this.getstore_id();
		//await this.showpdl_store();
		//console.log(this.state.productlist);
		//console.log(this.state.product_id);
		//
		//await this.get_cartlist();
		//console.log(this.state.cartlist);
		//await this.showpdl_lastcartlist();
		//
		//await this.change_cart();
		//await this.save_cart();
		//
		//await this.showpdl_menu();
		//console.log(this.state.productlist_menu);
		//console.log(this.state.product_id_menu);
		//console.log(this.state.menu);
		// await this.getcartid();
		// console.log(this.state.cart_id);
		// await this.get_cart();
		// console.log(this.state.cartlist);
	};

	getcartid = async () => {
		// let query = firebase.firestore().collection("user");
		// await query
		// 	.where("username", "==", this.state.username)
		// 	.get()
		// 	.then((querysnapshot) => {
		// 		querysnapshot.forEach((documentsnapshot) => {
		// 			this.setState({cart_id: documentsnapshot.data().cartid});
		// 		});
		// 	});

		let query = firebase.firestore().collection("user");
		let cart_id;
		console.log("22222222222222222222222222222222222222222");
		await query
			.where("username", "==", store.getState().loginReducer.username)
			.get()
			.then((querysnapshot) => {
				querysnapshot.forEach((documentsnapshot) => {
                    cart_id = documentsnapshot.data().cartid;
                    this.setState({cart_id:cart_id})
					console.log("1111111111", cart_id);
				});
			});
		// console.log(cart_id, "524242");
		// query = firebase.firestore().collection("cart");
		// await query
		// 	.doc(cart_id)
		// 	.set({cartlist: store.getState().addToCartReducer.productList});
	};

	// show product menu
	showpdl_menu = async () => {
		let query = firebase.firestore().collection("menu");
		let query2 = firebase.firestore().collection("product");
		await query
			.where("name", "==", this.state.menu_id)
			.get()
			.then((qureysnapshot) => {
				qureysnapshot.forEach((documentsnapshot) => {
					this.setState({
						productlist_menu: documentsnapshot.data().productList,
					});
				});
			});
		let tmpmenu = [];
		let tmpmenuall = [];
		for (
			let index = 0;
			index < this.state.productlist_menu.length;
			index++
		) {
			tmpmenu.push(this.state.productlist_menu[index].product_id);
			await query2
				.doc(this.state.productlist_menu[index].product_id)
				.get()
				.then((documentsnapshot) => {
					tmpmenuall.push(documentsnapshot.data());
				});
		}
		this.setState({
			product_id_menu: tmpmenu,
			menu: tmpmenuall,
		});
		//อันนี้แยกชื่อกับ quantity
	};

	// change& save cart

	change_cart = async () => {
		let tmp = this.state.cartlist;
		tmp[this.state.cartlist.length - 1].price = 1500;
		this.setState({
			cartlist: tmp,
		});
	};

	save_cart = () => {
		let query = firebase.firestore().collection("cart");
		query.doc(this.state.cart_id).set({cartlist: this.state.cartlist});
	};

	//show cart

	showpdl_lastcartlist = async () => {
		console.log(this.state.cartlist[this.state.cartlist.length - 1]);
	};

	get_cart = async () => {
        // let query = firebase.firestore().collection("user");
		// let cart_id;
		// await query
		// 	.where("username", "==", store.getState().loginReducer.username)
		// 	.get()
		// 	.then((querysnapshot) => {
		// 		querysnapshot.forEach((documentsnapshot) => {
		// 			cart_id = documentsnapshot.data().cartid;
		// 			// console.log("1111111111", cart_id);
		// 		});
		// 	});
		// let carttmp = "";
        // console.log("46666666666666666666666666666666", cart_id);
		// query = firebase.firestore().collection("cart");
		// await query
		// 	.doc(cart_id)
		// 	.get()
		// 	.then(async (documentsnapshot) => {
		// 		carttmp = documentsnapshot.data().cartlist;
		// 		carttmp[
		// 			parseInt(store.getState().addToCartReducer.length) - 1
		// 		].productlist = store.getState().addToCartReducer.productList;
		// 		console.log("4555555555555555555555555555555555", cart_id);
		// 		// await query.doc(cart_id).set({cartlist: carttmp});
		// 	});
		// this.setState({
		// 	cartlist: carttmp[carttmp.length - 1],
		// });
	};

	get_cartlist = async () => {
		let query = firebase.firestore().collection("cart");
		await query
			.doc(this.state.cart_id)
			.get()
			.then((documentsnapshot) => {
				this.setState({
					cartlist: documentsnapshot.data().cartlist,
				});
			});
	};

	// from store

	showpdl_store = async () => {
		let tmp1 = [],
			tmp2 = [];
		let query = firebase.firestore().collection("product");
		await query
			.where("store_id", "==", this.state.store_id)
			.get()
			.then((qureysnapshot) => {
				qureysnapshot.forEach((documentsnapshot) => {
					tmp1.push(documentsnapshot.data());
					tmp2.push(documentsnapshot.id);
				});
			});
		this.setState({
			productlist_store: tmp1,
			product_id_store: tmp2,
		});
	};

	getstore_id = async () => {
		let query = firebase.firestore().collection("store");
		await query
			.where("name", "==", this.state.store_name)
			.get()
			.then((qureysnapshot) => {
				qureysnapshot.forEach((documentsnapshot) => {
					this.setState({
						store_id: documentsnapshot.id,
					});
				});
			});
	};

	render() {
        console.log('fuck')
		return (
			<></>
			// <BuyProduct
			//     nameOfProduct="หอมหัวใหญ่"
			//     nameFood ="หอมหัวใหญ่"
			// 	color="brown"
			// 	price={[1,2,3]}
			// 	size={["250 กรัม","500 กรัม","1 กิโลกรัม"]}
			// 	// key={i}
			// 	quantity={500}
			//     match={this.props.match}
			//     used="200 กรัม"
			// 	// calculatePrice={this.calculatePrice}
			// 	// index={i}
			// />
		);
	}
}

export default Test;
