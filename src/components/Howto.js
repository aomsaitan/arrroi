import React, { Component } from "react";

class Howto extends Component {
    render() {
        return (
            <div class="HowTo">
                <div class="Step">{this.props.step}</div>
                <p>{this.props.des}</p>
            </div>
        )
    }
}
export default Howto