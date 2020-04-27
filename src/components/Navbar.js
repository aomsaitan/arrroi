import React, {Component} from "react";
import logo from "../images/logoweb2.png";
import menu from "../images/menu.png";
import shopping_cart from "../images/shopping-cart.png";
import notification from "../images/notification.png";
import {withRouter, Link} from "react-router-dom";
import {logout} from "../redux/index";
import {connect} from "react-redux";
import {compose} from "redux";
import NavbarList from "./NavbarList";
class Navbar extends Component {
	showDropdown = () => {
		let x = document.getElementById("dropdown");
		if (x.className === "dropdown-block") {
			x.className = "dropdown-none";
		} else {
			x.className = "dropdown-block";
		}
	};
	showDropdownS = () => {
		let x = document.getElementById("dropdownS");
		if (x.className === "dropdown-block") {
			x.className = "dropdown-none";
		} else {
			x.className = "dropdown-block";
		}
	};
	render() {
		return (
			<div className="row-flex navbar textM">
				<img
					style={{
						width: "2%",
						margin: "0 1vw 0 0.25vw",
						cursor: "pointer",
					}}
					id="more_menu"
					src={menu}
					alt="menu"
					className="background"
					onClick={this.showDropdown}
				/>
				<div id="dropdown" className="dropdown">
					<NavbarList
						to="/search"
						name="- ค้นหาเมนู"
						style={{marginTop: "-0.5vw"}}
					/>
					<NavbarList to="/home" name="- หน้าแรก" />
					<NavbarList to="/menu" name="- เมนู" />
					<NavbarList
						to="/about"
						name="เมนูแนะนำ"
						style={{textIndent: "1.9vw"}}
					/>
					<NavbarList
						to="/about"
						name="อาหารเหนือ"
						style={{textIndent: "1.9vw"}}
					/>
					<NavbarList
						to="/about"
						name="อาหารอีสาน"
						style={{textIndent: "1.9vw"}}
					/>
					<NavbarList
						to="/about"
						name="อาหารกลาง"
						style={{textIndent: "1.9vw"}}
					/>
					<NavbarList
						to="/about"
						name="อาหารใต้"
						style={{textIndent: "1.9vw"}}
					/>
					<NavbarList to="/about" name="- สินค้ายอดฮิต" />
					<NavbarList to="/about" name="- เกี่ยวกับ" />
				</div>
				<img
					style={{
						width: "8vw",
						height: "7vw",
						margin: "-2.3vw 52vw 0 0",
					}}
					src={logo}
					alt="logo"
				/>
				<img
					style={{
						width: "1.3vw",
						height: "1.4vw",
						margin: "0.3vw 0.7vw 0vw 0",
						cursor: "pointer",
					}}
					onClick={() => {
						this.props.history.push("./notification");
					}}
					src={notification}
					alt="notification"
				/>
				<Link
					className="link"
					to="/notification"
					style={{
						fontSize: "1.4vw",
						margin: "-0.14vw 0 0 0",
					}}
				>
					Notification
				</Link>
				<div
					style={{
						borderLeft: "0.15vw solid #707070",
						margin: "0 2vw 0 2vw",
					}}
				/>
				{this.props.isLoggedIn ? (
					<>
						<div
							style={{
								cursor: "pointer",
								fontSize: "1.4vw",
								margin: "-0.14vw 0 0 0",
							}}
							id="more_menuS"
							onClick={this.showDropdownS}
						>
							{this.props.username}
						</div>
						<div
							id="dropdownS"
							className="dropdown"
							style={{left: "76.5vw", width: "13vw"}}
						>
							<NavbarList
								to="/about"
								name="การซื้อของฉัน"
								style={{
									marginTop: "-0.5vw",
									textIndent: "1.5vw",
								}}
							/>
							<hr />
							<NavbarList
								to="/about"
								name="การขายของฉัน"
								style={{
									textIndent: "1.5vw",
								}}
							/>
							<hr />
							<NavbarList
								to="/about"
								name="ร้านค้าของฉัน"
								style={{
									textIndent: "1.5vw",
								}}
							/>
							<hr />
							<NavbarList
								to="/about"
								name="สูตรอาหารของฉัน"
								style={{
									textIndent: "1.5vw",
								}}
							/>
							<hr />
							<div
								className="block dropdown-content textS"
								style={{
									textIndent: "1.5vw",
									cursor: "pointer",
								}}
								onClick={() => {
									this.props.logout();
								}}
							>
								Log out
							</div>
						</div>
					</>
				) : (
					<>
						<Link
							className="link"
							to="/register"
							style={{
								fontSize: "1.4vw",
								margin: "-0.14vw 0 0 0",
							}}
						>
							Register
						</Link>
						<div
							style={{
								borderLeft: "0.15vw solid #707070",
								margin: "0 2vw 0 2vw",
							}}
						/>
						<Link
							to="/login"
							className="link"
							style={{
								fontSize: "1.4vw",
								margin: "-0.14vw 0 0 0",
							}}
						>
							Log in
						</Link>
					</>
				)}
				<Link className="link" to="/cart">
					<img
						style={{
							width: "2%",
							position: "absolute",
							left: "95%",
							top: "17%",
						}}
						src={shopping_cart}
						alt="menu"
						className="background"
					/>
				</Link>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.loginReducer.isLoggedIn,
		username: state.loginReducer.username,
		numberOfItems: state.numberOfItems,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => dispatch(logout()),
	};
};
export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter
)(Navbar);
