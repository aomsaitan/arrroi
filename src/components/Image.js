import React, {Component} from "react";
import getImage from "../database/getImage";
class Image extends Component {
    render() {
        console.log(this.props.nameFood)
		return (
			<img
				style={this.props.style}
				alt={this.props.alt}
				id={
					this.props.id
						? this.props.id
						: this.props.nameFood
				}
                className={this.props.className}
                onClick={this.props.onClick}
			/>
		);
	}
}

export default getImage(Image);
