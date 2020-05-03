import React, {Component} from "react";
import Image from './Image'
class NotificationField extends Component {
	render() {
		return (
			<div className="Notification">
				<Image
					nameIcon={this.props.type === "Order" ? "box" : "bullhorn"}
					alt={this.props.type}
				/>
				<div>
					<h2 className = "notification">{this.props.head}</h2>
					<p>{this.props.des}</p>
					<p>
						{this.props.time} {this.props.date}
					</p>
				</div>
			</div>
		);
	}
}
export default NotificationField;
