import React, {Component} from "react";
import Image from "./Image";
class EmptyOrder extends Component {
	render() {
		return (
			<div className="emptyCart">
				<Image
					className="BGEmptyCart"
					nameFood="supermarketSale"
					alt="supermarketSale"
				/>
				<div className="textS letShop" align="center" style={{marginTop:"15vw"}}>
					<Image
						className="aloneCart"
						nameIcon="interface"
						alt="interface"
					/>
					<p className="letShopT">ไม่พบคำสั่งซื้อ</p>
					<p align = "center">ไม่เป็นไรนะเดี๋ยวก็มีลูกค้าเข้ามาเอง</p>					
				</div>
			</div>
		);
	}
}
export default EmptyOrder;
