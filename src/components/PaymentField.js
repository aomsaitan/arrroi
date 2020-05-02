import React, { Component } from 'react'
import getImage from '../database/getImage'

class PaymentField extends Component {
    render() {
        return (
            <label className="PaymentField-container">
                <input type="radio" name="radio payment"></input>
                <span className="checkmark row-flex"><img name = {this.props.nameIcon} alt = {this.props.nameIcon} />
                    <p >{this.props.bank}</p></span>
            </label>

        )
    }
}
export default getImage(PaymentField)