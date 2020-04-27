import React, {Component} from "react";
import getImage from '../database/getImage'
class MenuField extends Component {
	render() {
		return (
			<div
				style={
					this.props.type === "step"
						? {margin: "2vw 0 2vw 15vw"}
						: {margin: "0 0 1vw 15vw"}
				}
			>
				<img
					id={this.props.nameIcon}
					alt={this.props.alt}
					className="menu_icon"
				/>
				<span style={{position: "relative", top: "-0.75vw"}}>
					{this.props.type === "step" ? (
						"วิธีทำ"
					) : this.props.type === "ingredient" ? (
						"ส่วนผสม"
					) : (
						<>สำหรับ&nbsp;{this.props.multiplier}&nbsp;ที่</>
					)}
				</span>
			</div>
		);
	}
}

export default getImage(MenuField);
