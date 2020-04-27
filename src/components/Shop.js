import React, {Component} from "react";
import getImage from "../database/getImage";
import { Link } from "react-router-dom";
class Shop extends Component {
	render() {
		return (
			<div className="shop">
				<Link className ="link" to = {"/" + this.props.nameFood}>
					<div className="shop-box textS"> {this.props.nameFood}</div>
					<div className="cover">
						<img
							id={this.props.nameFood}
							alt={this.props.nameFood}
						/>
					</div>
				<div className="des textS">
					<p>{this.props.detail}</p>
					{parseInt(this.props.star) === 5 ? (
						<span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
					) : parseInt(this.props.star) === 4 ? (
						<span>&#9733;&#9733;&#9733;&#9733;&#9734;</span>
					) : parseInt(this.props.star) === 3 ? (
						<span>&#9733;&#9733;&#9733;&#9734;&#9734;</span>
					) : parseInt(this.props.star) === 2 ? (
						<span>&#9733;&#9733;&#9734;&#9734;&#9734;</span>
					) : parseInt(this.props.star) === 1 ? (
						<span>&#9733;&#9734;&#9734;&#9734;&#9734;</span>
					) : (
						<span>&#9734;&#9734;&#9734;&#9734;&#9734;</span>
					)}
					<p className="address">{this.props.address}</p>
				</div>
				</Link>
			</div>
		);
	}
}
export default getImage(Shop);
