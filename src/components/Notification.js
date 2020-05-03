import React, {Component} from "react";
import NotificationField from "./NotificationField";
import {connect} from "react-redux";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import {withRouter} from "react-router-dom";
import EmptyNoti from "./EmptyNoti";
import Loading from "./Loading";

class Notification extends Component {
	render() {
		console.log("dfsdad", this.props.notification);
		if (this.props.isLoggedIn)
			if (this.props.notification)
				return (
					<div className="textS">
						<h1 align="center" style={{fontSize: "4vw"}}>
							Notification
						</h1>
						{/* {this.props.notification.map(a => console.log(a))} */}
						<NotificationField
							type="Order"
							head="ได้รับสินค้าแล้วหรือยัง"
							des="กรุณาตรวจสอบ Order #292706378684051 ให้ดีก่อนกดรับสินค้า เราขอเรียนให้ทราบว่าคุณจะไม่สามารถยื่นคำขอคืนเงินหรือคืนสินค้าได้หลังจากคุณกด ฉันได้ตรวจสอบและยอมรับสินค้า"
							time="1:26 AM"
							date="4/28/2020"
						></NotificationField>
						<NotificationField
							type="Announce"
							head="ร้านออมสินขายเนื้อ ได้เพิ่มสินค้าเพิ่มแล้ว"
							des="สามารถไปดูสินค้าได้ที่ ร้านออมสินขายเนื้อ"
							time="1:26 AM"
							date="4/28/2020"
						></NotificationField>
						<NotificationField
							type="Announce"
							head="ขณะนี้พริกไทยป่น กำลังเป็นที่นิยม Hot!"
							time="1:26 AM"
							date="4/28/2020"
						></NotificationField>
						<NotificationField
							type="Order"
							head="พัสดุของท่านถูกจัดส่งเรียบร้อยแล้ว"
							des="Order #292706378684051 Tracking # LEXPU029069964"
							time="1:26 AM"
							date="4/28/2020"
						></NotificationField>
					</div>
                );
            else return <Loading />
		else return <EmptyNoti />;
	}
}
const mapStateToProps = (state) => {
	return {
		notification: state.firestore.ordered.notification,
		username: state.loginReducer.username,
		isLoggedIn: state.loginReducer.isLoggedIn,
	};
};
export default compose(
	connect(mapStateToProps),
	withRouter,
	firestoreConnect((props) => {
		// console.log(props)
		return [
			{
				collection: "notification",
				where: [["username", "==", props.username]],
			},
		];
	})
)(Notification);
