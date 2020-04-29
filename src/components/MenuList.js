import React, {Component} from "react";
import { Link, withRouter } from "react-router-dom";
import Image from './Image'
class MenuList extends Component {
	render() {
		return (
            <div className="row-flex menu-container textS">
                <Image className="menu"
					nameFood={this.props.menu}
					alt={this.props.alt}/>
				<div className="column-flex">
					<div className="menu-title">{this.props.alt}</div>
					<div className="row-flex">
						<Link
							className="link menu-link"
							to={"/menu/" + this.props.menu + "/ingredients"} //ชื่อเมนูอยู่ตรงกลาง เช่น /menu/กุ้งคั่วกระเทียมพริก/ingredients
						>
							<img
								className="menu-icon"
								src="https://firebasestorage.googleapis.com/v0/b/ingredient-cfs.appspot.com/o/Icon%2Fpan.png?alt=media&token=4a4245d2-dfb9-4527-aec0-3d2fdb273d0e"
								alt="pan"
							/>
							ซื้อส่วนผสม
						</Link>
					</div>
					<div className="row-flex">
						<Link
							className="link menu-link"
							to={"/menu/" + this.props.menu + "/steps"} //ชื่อเมนูอยู่ตรงกลาง เช่น /menu/กุ้งคั่วกระเทียมพริก/steps
						>
							<img className="menu-icon" src="https://firebasestorage.googleapis.com/v0/b/ingredient-cfs.appspot.com/o/Icon%2Fmix.png?alt=media&token=9cac0b6c-9106-47d5-b8be-a25b9708eae3" alt="mix" />
							วิธีทำ
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(MenuList);
