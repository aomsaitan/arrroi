import React, {Component} from "react";
import Image from "./Image";
import {withRouter} from 'react-router-dom'
class EmptyBuy extends Component {
	render() {
		return (
			<div className="emptyBuy">
				<Image
					className="BGEmptyCart"
					nameFood="supermarketBuy"
					alt="supermarketBuy"
				/>
				<div className="textS letBuy" align="center">
					<Image
						className="businessIcon"
						nameIcon="business"
						alt="business"
					/>
					<p className="letBuyT">ยังไม่มีการสั่งซื้อสินค้า</p>
					<p >ไปเลือกซื้อสินค้าที่โดนใจกันเลย</p>
					<button className="textS letBuyB" onClick = {() => {this.props.history.push('/home')}}>ช้อปตอนนี้</button>
				</div>
			</div>
		);
	}
}
export default withRouter(EmptyBuy);
