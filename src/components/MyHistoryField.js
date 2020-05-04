import React, { Component } from 'react'
import Image from './Image'
class MyHistoryField extends Component {
    render() {
        return (
            <div className={"MySalesField textS "+ (this.props.type ? this.props.type : "")} onClick ={this.props.onClick}
                style={
                    this.props.color === "brown"
                        ? { backgroundColor: "#814A2C" }
                        : { backgroundColor: "#4A362B" }
                    
                }>
                <div className="column-flex" style = {{width:"calc(0vw + 82%)",marginTop:"0.5%",marginBottom:"calc(0vw + 1%)",marginLeft:"calc(0vw + 2%)"}}>
                    <div className="row-flex" style = {{marginTop:"calc(0vw + 1%)"}}>
                        <Image nameIcon='user' alt="user" />
                        <p className = "payment_text">ชื่อ - นามสกุล {this.props.name}</p>
                    </div>
                    <div className="row-flex" style = {{marginTop:"calc(0vw + 1)%"}}>
                        <Image nameIcon="phone" alt="phone" />
                        <p className = "payment_text">เบอร์โทร {this.props.phone}</p>
                    </div>
                    <div className="row-flex" style = {{marginTop:"calc(0vw + 1%)"}}>
                        <Image nameIcon="envelope" alt="email" />
                        <p className = "payment_text">อีเมล {this.props.email}</p>
                    </div>
                    <div className="row-flex" style = {{marginTop:"calc(0vw + 1%)"}}>
                        <Image nameIcon="placeholder" alt="address" />
                        <p className = "payment_text">ที่อยู่ {this.props.address}</p>
                    </div>
                </div>
                <div className = "TimeAndDate">
                    <p >{this.props.time} {this.props.date}</p>
                </div>
            </div>
        )
    }
}
export default MyHistoryField