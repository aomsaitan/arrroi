import React, {Component} from "react";

class LoginField extends Component {
	render() {
		return (
			<>
				<label className="left" htmlFor={this.props.id}>
					{this.props.id}
				</label>
				{this.props.children}
			</>
		);
	}
}

export default LoginField;
