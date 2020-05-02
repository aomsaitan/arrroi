import React, {Component} from "react";
import getImage from "../database/getImage";
class Image extends Component {
	render() {
		return (
			<img
				style={this.props.style}
				alt={this.props.alt}
				name={this.props.nameFood ? this.props.nameFood : this.props.nameIcon}
				className={this.props.className}
                onClick={this.props.onClick}
                src={this.props.src}
			/>
		);
	}
}

export default getImage(Image);
