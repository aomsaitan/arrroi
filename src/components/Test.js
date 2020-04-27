import React, {Component} from "react";
import Test2 from "./Test2";
import BuyProduct from "./Ingredients";
import MenuDetails from "./MenuDetails";
// import "./Menu.css";
// import MenuField from './MenuField';
// import HowTo from './Howto';
// import GetImage from '../aetImage';
// import Ingredients from './Ingredients'

import getImage from "../database/getImage";

class Test extends Component {
	render() {
		return (<></>
			// <body>
			// 	<img class="BG" id={this.props.nameFood} />
			// 	<h1 class="textS">เนื้อผัดน้ำมันหอย</h1>

			// 	<div class="menu textS">
            //         <MenuField
            //             nameIcon="networking"
            //             des="สำหรับ 6 ที่"
            //         ></MenuField>
			// 		<MenuField nameIcon="pan" des="ส่วนผสม"></MenuField>

			// 		<div class="desInbox column-flex">
			// 			<Ingredients
			// 				Ingredients="เนื้อสันในวัวหั่นชิ้นบางขนาดพอคำ"
			// 				quantity="300 กรัม"
			// 			></Ingredients>
			// 			<Ingredients
			// 				Ingredients="ซอสหอยนางรม"
			// 				quantity="2 ช้อนชา"
			// 			></Ingredients>
			// 			<Ingredients
			// 				Ingredients="ซอสปรุงอาหารตราแม็กกี้ สูตรผัดกลมกล่อม"
			// 				quantity="1 ช้อนชา"
			// 			></Ingredients>
			// 			<Ingredients
			// 				Ingredients=" หอมหัวใหญ่"
			// 				quantity=" 1 หัว (150 กรัม)"
			// 			></Ingredients>
			// 			<Ingredients
			// 				Ingredients="ต้นกระเทียมหั่นเป็นท่อน"
			// 				quantity=" 5 ต้น (200 กรัม)"
			// 			></Ingredients>
			// 			<Ingredients
			// 				Ingredients="เนื้อสันในวัวหั่นชิ้นบางขนาดพอคำ"
			// 				quantity="300 กรัม"
			// 			></Ingredients>
			// 			<Ingredients
			// 				Ingredients="เนื้อสันในวัวหั่นชิ้นบางขนาดพอคำ"
			// 				quantity="300 กรัม"
			// 			></Ingredients> 
			// 		</div> 
			// 		<MenuField nameIcon="mix" des="วิธีทำ"></MenuField>
			// 		<HowTo
			// 			step="Step 1"
			// 			des="หมักเนื้อวัวโดยปรุงรสด้วยซอสหอยนางรม ซอสปรุงอาหาร ซีอิ๊วดำ พริกไทยป่นและน้ำตาลทราย คลุกเคล้าให้เข้ากัน พักไว้ในตู้เย็นประมาณ 30 นาที"
			// 		></HowTo>
			// 		<HowTo
			// 			step="Step 2"
			// 			des="ใส่น้ำมันพืชลงในกระทะ ตั้งไฟปานกลางพอร้อน ใส่กระเทียม ผัดพอหอม ตามด้วยเนื้อวัวที่เตรียมไว้ ผัดด้วยไฟแรงให้เนื้อเกือบสุก ใส่หอมหัวใหญ่ น้ำเปล่า ผัดพอสุกจึงใส่ต้นกระเทียมและพริกชี้ฟ้าแดง ผัดอีกสักครู่ยกลง จัดรับประทานกับข้าวสวยขณะร้อน "
			// 		></HowTo>
			// 	</div>
			// </body>
		);
	}
}
export default getImage(Test);
