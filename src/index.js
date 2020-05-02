import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
window.addEventListener("load", async () => {
	console.log("dsdafd");
});
document.addEventListener("mouseup", (event) => {
	let x = document.getElementById("dropdown");
	let y = document.getElementById("more_menu");
	let m = document.getElementById("dropdownS");
	let n = document.getElementById("more_menuS");
	if (event.target !== x && event.target !== y) {
		if (x.className === "dropdown-block") {
			x.className = "dropdown-none";
		}
	}
	if (event.target !== m && event.target !== n && m !== null) {
		if (m.className === "dropdown-block") {
			m.className = "dropdown-none";
		}
	}
});
ReactDOM.render(<App />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
