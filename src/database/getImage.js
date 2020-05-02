import React, {Component} from "react";
import firebase from "../database/firebase";

var storage = firebase.storage().ref();

function getImage(HocComponent) {
	return class extends Component {
		constructor(props) {
			super(props);
			const {nameFood} = this.props;
			if (nameFood) {
				if (typeof nameFood !== "object") this.getImageFood(nameFood);
				else
					nameFood.forEach((element) => {
						this.getImageFood(nameFood);
					});
			}
			const {nameIcon} = this.props;

			if (nameIcon) {
				this.getImageIcon(nameIcon);
			}
		}

		getImageFood(image) {
			storage
				.child(`Food/${image}.jpg`)
				.getDownloadURL()
				.then(function (url) {
					const storageRef = document.getElementsByName(image);
					storageRef.forEach((item) => (item.src = url));
				})
				.catch(function (error) {
					console.log(error);
				});
		}
		getImageIcon(image) {
			storage
				.child(`Icon/${image}.png`)
				.getDownloadURL()
				.then(function (url) {
					const storageRef = document.getElementsByName(image);
					storageRef.forEach((item) => (item.src = url));
				})
				.catch(function (error) {
					console.log(error);
				});
		}
		render() {
			return <HocComponent {...this.props} />;
		}
	};
}
export default getImage;
