import React, { Component } from 'react'
import firebase from '../database/firebase'

var storage = firebase.storage().ref()

function getImage(HocComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            const { nameFood } = this.props;
            if (nameFood) {
                this.getImageFood(nameFood)
            }
            const { nameIcon } = this.props;
            
            if (nameIcon) {
                this.getImageIcon(nameIcon)
            }           
        }
        
        getImageFood(image) {
            storage.child(`Food/${image}.jpg`).getDownloadURL().then(function (url) {
                const storageRef = document.getElementById(image)
                storageRef.src = url
            }).catch(function (error) { })
        };
        getImageIcon(image) {
            storage.child(`Icon/${image}.png`).getDownloadURL().then(function (url) {
                    const storageRef = document.getElementById(image)
                    storageRef.src = url 
                    console.log(url)          
                
            }).catch(function (error) { 
                console.log(error)
            })
        };
        render() {
            return <HocComponent {...this.props} />
        }
    }
}
export default getImage;