import React, {Component} from "react";
import firebase from "../database/firebase";
// import กะเพราหมู from "../images/กะเพราหมู.jpg";
// import กุ้งคั่วกระเทียมพริก from "../images/กุ้งคั่วกระเทียมพริก.jpg";
import ข้าวผัดกุ้ง from "../images/ข้าวผัดกุ้ง.png";
import MenuList from "./MenuList";
import RegionalMenu from "./RegionalMenu";
import Slideshow from "./Slideshow";
import Loading from "./Loading";

// const images = [{ ข้าวผัดกุ้ง }, {ข้าวผัดกุ้ง}]
class MenuPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menuList: "",
		};
	}

	componentDidMount = async () => {
		await this.importdata();
	};

	importdata = async () => {
		let tmp = [];
		let tmp2 = [];
		let db = firebase.firestore();
		await db
			.collection("menu")
			.get()
			.then((querysnapshot) => {
				querysnapshot.forEach((documentsnapshot) => {
					//console.log(documentsnapshot.id);
					tmp2.push(documentsnapshot.id);
					//console.log(documentsnapshot.data().name);
                    tmp.push(documentsnapshot.data().name);
				});
			})
			.catch(function (error) {
				console.log("Error", error);
			});
        // let temp = tmp.map((x, i) => [x, tmp2[i]]);
		// console.log(temp);
		// console.log(this.state.menu_id);
	};

	render() {
		if (this.state.menuList !== "")
		return (
			<div className="column-flex menu-page">
				<h1 className="menuPage_title">เมนูแนะนำ</h1>
				<Slideshow images={[ข้าวผัดกุ้ง]} />
				<div className="row-flex region-container">
					<RegionalMenu
						src={ข้าวผัดกุ้ง}
						alt="ข้าวผัดกุ้ง"
						title="อาหารเหนือ"
					/>
					<RegionalMenu
						src={ข้าวผัดกุ้ง}
						alt="ข้าวผัดกุ้ง"
						title="อาหารอีสาน"
					/>
					<RegionalMenu
						src={ข้าวผัดกุ้ง}
						alt="ข้าวผัดกุ้ง"
						title="อาหารกลาง"
					/>
					<RegionalMenu
						src={ข้าวผัดกุ้ง}
						alt="ข้าวผัดกุ้ง"
						title="อาหารใต้"
					/>
				</div>
				<div className="column-flex">
					{this.state.menuList.map((menu) => {
                        return <MenuList key={menu.id}src={ข้าวผัดกุ้ง} alt={menu} menu={menu.name}/>;
						})}
					<MenuList src={ข้าวผัดกุ้ง} alt="ข้าวผัดกุ้ง" />
					<MenuList src={ข้าวผัดกุ้ง} alt="ข้าวผัดหมู" />
					<MenuList src={ข้าวผัดกุ้ง} alt="ข้าวผัดปลา" />
					<MenuList src={ข้าวผัดกุ้ง} alt="ข้าวผัดปู" />
					<MenuList src={ข้าวผัดกุ้ง} alt="ข้าวผัดหมู" />
				</div>
			</div>
		);
		else return <Loading />;
	}
}

export default MenuPage;
