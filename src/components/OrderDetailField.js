import React, { Component } from 'react'
import getImage from '../database/getImage'

class OrderDetailField extends Component {
    render() {
        return (
            <div className="OrderList">
                <div className="OrderList-cover"><img name={this.props.nameFood} alt={this.props.nameFood} /></div>
                <div className = "OrderList-box"><p>{this.props.nameFood}</p></div>
                <div className = "OrderList-box"><p>{this.props.size}</p></div > {/*ปริมาณที่แบ่งขาย*/}
                <div className = "OrderList-box"><p>ราคา : {this.props.price}</p></div> {/*ราคา*/}
                <div className = "OrderList-box"><p>จำนวน : {this.props.quantity}</p></div>
            </div>
        )
    }
}
export default getImage(OrderDetailField)