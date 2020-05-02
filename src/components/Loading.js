import React, {Component} from "react";

class Loading extends Component {
	render() {
		return (
			<div className="vertical-center" style={{top: "50%",position:'fixed',zIndex:"10"}}>
				<div className="lds-roller">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		);
	}
}

export default Loading;
