import React, {Component} from "react";
import getImage from "../database/getImage";

class MyShopField extends Component {
	render() {
		return (
			<div className="textS" style={{marginBottom: "3vw"}}>
				<h1
					align="center"
					style={{fontSize: "4vw", marginBottom: "1vw"}}
				>
					{this.props.nameShop}
				</h1>
				<div className="MyShop row-flex">
					<div className="shopcover">
						<img
							name={this.props.nameFood}
							alt={this.props.nameFood}
						/>
					</div>
					<div className="MyShopdes">
						<div className="MyShopH">
							<img name={this.props.nameIcon} alt="pencil" />
							<p>รายละเอียดร้านค้า</p>
						</div>
						<p style={{marginLeft: "calc(0vw + 1%)"}}>
							{this.props.des}
						</p>
					</div>
				</div>
			</div>
		);
	}
}
export default getImage(MyShopField);
