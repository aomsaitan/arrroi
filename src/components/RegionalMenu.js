import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";

class RegionalMenu extends Component {
	render() {
		return (
			<Link className="link region-link textS column-flex" to = '/menu'>
                {/* <div className=""> */}
					<div className = "region-title">{this.props.title}</div>
					<img className = "region-img" src={this.props.src} alt={this.props.alt} />
					<div className = "region-more">เพิ่มเติม</div>
				{/* </div> */}
			</Link>
		);
	}
}

export default withRouter(RegionalMenu);
