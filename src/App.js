import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import "react-tippy/dist/tippy.css";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Test from "./components/Test";
import MenuPage from "./components/MenuPage";
import MenuDetails from "./components/MenuDetails";
import Ingredients from "./components/Ingredients";
import ShopPage from "./components/ShopPage";
import {Provider} from "react-redux";
import store from "./redux/store";
import BuyProduct from "./components/BuyProduct";
import Cart from "./components/Cart";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<Navbar />
					<div style={{marginBottom: "3vw"}} />
					<Switch>
						<Route path="/" exact component={Welcome} />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Route path="/home" component={Home} />
						<Route path="/test" component={Test} />
						<Route path="/about" component={About} />
						<Route path="/menu" exact component={MenuPage} />
						<Route
							path="/menu/:name/steps"
							component={MenuDetails}
						/>
						<Route
							path="/menu/:name/ingredients"
							component={Ingredients}
						/>
						<Route path="/shop" exact component={ShopPage} />
						<Route
							path="/shop/:name"
							exact
							component={Ingredients}
						/>
						<Route path="/:name/cart" component={Cart} />
					</Switch>
				</Router>
			</Provider>
		);
	}
}

export default App;
