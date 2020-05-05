import React, {Component} from "react";
import { Link, withRouter } from "react-router-dom";
import Image from './Image'

class RegionalMenu extends Component {
	render() {
		return (
			<Link className="link region-link textS column-flex" to = '/menu'>
					<div className = "region-title">{this.props.title}</div>
					<Image className = "region-img" nameFood={this.props.nameFood} alt={this.props.alt} />
					<div className = "region-more">เพิ่มเติม</div>
			</Link>
		);
	}
}

export default withRouter(RegionalMenu);
