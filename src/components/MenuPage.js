import React, {Component} from "react";
import firebase from "../database/firebase";
import ข้าวผัดกุ้ง from "../images/ข้าวผัดกุ้ง.png";
import MenuList from "./MenuList";
import RegionalMenu from "./RegionalMenu";
import Slideshow from "./Slideshow";
import Loading from "./Loading";
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
		let db = firebase.firestore();
		await db
			.collection("menu")
			.get()
			.then((querysnapshot) => {
				querysnapshot.forEach((documentsnapshot) => {
                    tmp.push({id:documentsnapshot.id,name: documentsnapshot.data().name});
				});
			})
			.catch(function (error) {
				console.log("Error", error);
            });
        this.setState({
            menuList:tmp
        })
	};

    render() {
        console.log(this.state.menuList)
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
                        return <MenuList  key={menu.id}src={ข้าวผัดกุ้ง} alt={menu.name} menu={menu.name}/>;
						})}
				</div>
			</div>
		);
		else return <Loading />;
	}
}

export default MenuPage;
