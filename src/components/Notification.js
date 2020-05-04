import React, {Component} from "react";
import NotificationField from "./NotificationField";
import {connect} from "react-redux";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import {withRouter} from "react-router-dom";
import EmptyNoti from "./EmptyNoti";
import Loading from "./Loading";
import firebase from "../database/firebase";
class Notification extends Component {
	componentDidMount = () => {
		window.scrollTo(0, 0);
	};
	sendNotification = async () => {
		let query = firebase.firestore().collection("user");
		let noti_key;
		await query
			.where("username", "==", this.props.username)
			.limit(1)
			.get()
			.then((querysnapshot) => {
				querysnapshot.forEach((documentsnapshot) => {
					noti_key = documentsnapshot.data().noti_key;
				});
			});
		let noti_list = [];
		console.log(noti_key, "sdffssfsffsf");
		query = firebase.firestore().collection("notification");
		await query
			.doc(noti_key)
			.get()
			.then((documentsnapshot) => {
				noti_list = documentsnapshot.data().notification_list;
				console.log(noti_list, "fddfsfsfs");
			});
		noti_list.push({
			message: "test",
			time: firebase.firestore.Timestamp.now(),
			title: "test",
			type: "TEST",
		});
		query = firebase.firestore().collection("notification");
		await query.doc(noti_key).set({
			notification_list: noti_list,
			username: this.props.username,
		});
	};
	render() {
		console.log("dfsdad", this.props.notification);
		if (this.props.isLoggedIn)
			if (this.props.notification) {
				if (
					this.props.notification[0] &&
					this.props.notification[0].notification_list &&
					this.props.notification[0].notification_list.length > 0
				) {
					console.log("dfsdad", this.props.notification);
					let noti = this.props.notification[0].notification_list.slice();
					return (
						<div className="textS">
							<h1 align="center" style={{fontSize: "4vw"}}>
								Notification
							</h1>
							{noti.reverse().map((notification, i) => {
								return (
									<NotificationField
										type={notification.type}
										key={i}
										head={notification.title}
										des={notification.message}
										time={notification.time
											.toDate()
											.toLocaleString()
											.replace(",", "")}
									/>
								);
							})}
						</div>
					);
				} else return <EmptyNoti />;
			} else return <Loading />;
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
	withRouter,
	connect(mapStateToProps),
	firestoreConnect((props) => [
		{
			collection: "notification",
			limit: 1,
			where: [["username", "==", props.username]],
			// orderBy: ["time", "desc"],
		},
	])
)(Notification);
