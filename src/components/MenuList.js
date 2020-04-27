import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import pan from "../images/pan.png";
import mix from "../images/mix.png";
class MenuList extends Component {
	render() {
		return (
			<div className="row-flex menu-container textS">
				<img
					className="menu"
					src={this.props.src}
					alt={this.props.alt}
				/>
				<div className="column-flex">
					<div className="menu-title">{this.props.alt}</div>
					<div className="row-flex">
						<Link
							className="link menu-link"
							to={"/menu/" + this.props.menu + "/ingredients"} //ชื่อเมนูอยู่ตรงกลาง เช่น /menu/กุ้งคั่วกระเทียมพริก/ingredients
						>
							<img className="menu-icon" src={pan} alt="pan" />
							ซื้อส่วนผสม
						</Link>
					</div>
					<div className="row-flex">
						<Link
							className="link menu-link"
							to={"/menu/" + this.props.menu + "/steps"} //ชื่อเมนูอยู่ตรงกลาง เช่น /menu/กุ้งคั่วกระเทียมพริก/steps
						>
							<img className="menu-icon" src={mix} alt="mix" />
							วิธีทำ
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(MenuList);
