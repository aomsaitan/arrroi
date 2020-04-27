import React, {Component} from "react";
import {Link} from "react-router-dom";

class NavbarList extends Component {

	render() {
		return (
			<Link
				className="link block dropdown-content textS"
                to={this.props.to}
                style={this.props.style}
			>
				{this.props.name}
			</Link>
		);
	}
}

export default NavbarList;
