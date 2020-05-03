import React, {Component} from "react";
import Image from "./Image";
class EmptyNoti extends Component {
	render() {
		return (
			<div className="emptyNoti">
				<Image
					className="BGEmptyNoti"
					nameFood="bgEmptyNoti"
					alt="superMarket"
				/>
				<div className="textS letNoti" align="center">
					<Image
						className="smartphone"
						nameIcon="smartphone"
						alt="smartphone"
					/>
					<p className="letNotiT">ยังไม่มีการแจ้งเตือน</p>
					<p>ถ้ามีข้อความแจ้งเตือนมา เดี๋ยวเราจะบอกนะ</p>
				</div>
			</div>
		);
	}
}
export default EmptyNoti;
