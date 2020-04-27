import React, {Component} from "react";
import Input from "./Input";

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
