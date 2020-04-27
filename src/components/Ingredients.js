import React, {Component} from "react";
import BuyProduct from "./BuyProduct";
import เนื้อสันในวัว from "../images/เนื้อสันในวัว.jpg";

class Ingredients extends Component {
	constructor(props) {
		super(props);

		// this.state = {
		// 	 type={} //คืออันนี้ มันจะใช้หลายหน้าอะ เรากำหนด type ให้แล้ว เป็น menu คือมาเป็นหน้าซื้อส่วนผสมจากเมนู, store คือมาจากหน้าร้านค้า, cart คือ
		// };
	}

    render() {
		return (
			<>
				<BuyProduct
					nameOfProduct="เนื้อสันในวัว 150 กรัม"
					color="brown"
					price="99"
					unitOfProduct="ถุง"
					imgFood={เนื้อสันในวัว}
                    type="x"
                    match={this.props.match}
				/>
				<BuyProduct
					nameOfProduct="เนื้อสันในวัว 150 กรัม"
					color="cream"
					price="99"
					unitOfProduct="ถุง"
					imgFood={เนื้อสันในวัว}
                    match={this.props.match}
					type="x"
				/>
			</>
		);
	}
}
export default Ingredients;
