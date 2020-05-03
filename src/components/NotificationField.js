import React, {Component} from "react";
import Image from "./Image";
class NotificationField extends Component {
	render() {
        const bullhorn = "https://firebasestorage.googleapis.com/v0/b/ingredient-cfs.appspot.com/o/Icon%2Fbullhorn.png?alt=media&token=de378193-a0b6-4e31-b0b2-b77ecf0be82e";
        const box ="https://firebasestorage.googleapis.com/v0/b/ingredient-cfs.appspot.com/o/Icon%2Fbox.png?alt=media&token=de378193-a0b6-4e31-b0b2-b77ecf0be82e"
		return (
			<div className="Notification">
				<Image
					src={this.props.type === "order" ? box : bullhorn}
					alt={this.props.type}
				/>
				<div>
					<h2 className="notification">{this.props.head}</h2>
					<p>{this.props.des}</p>
					<p>
						{this.props.time}
					</p>
				</div>
			</div>
		);
	}
}
export default NotificationField;
