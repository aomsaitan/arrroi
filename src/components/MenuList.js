import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import Image from "./Image";
class MenuList extends Component {
	render() {
		return (
			<div className="row-flex menu-container textS">
				<Image
					className="menu"
					nameFood={this.props.menu}
					alt={this.props.alt}
				/>
				<div className="column-flex">
					<div className="menu-title">{this.props.alt}</div>
					<div className="row-flex">
						<Link
							className="link menu-link"
							to={"/menu/ingredients/id="+this.props.id} //ชื่อเมนูอยู่ตรงกลาง เช่น /menu/กุ้งคั่วกระเทียมพริก/ingredients
						>
							<Image
								className="menu-icon"
								nameIcon="pan"
								alt="pan"
							/>
							ซื้อส่วนผสม
						</Link>
					</div>
					<div className="row-flex">
						<Link
							className="link menu-link"
							to={"/menu/steps/id="+this.props.id} //ชื่อเมนูอยู่ตรงกลาง เช่น /menu/กุ้งคั่วกระเทียมพริก/steps
						>
							<Image
								className="menu-icon"
								nameIcon="mix"
								alt="mix"
							/>
							วิธีทำ
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(MenuList);
