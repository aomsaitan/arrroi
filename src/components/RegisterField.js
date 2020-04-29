import React, {Component} from "react";
import information from "../images/information.png";
import {Tooltip as Tippy} from "react-tippy";

class RegisterField extends Component {
	render() {
		return (
			<div className="row-flex">
				<div
					className="register-label-box"
					style={{marginTop: "-0.25vw"}}
				>
					<label className="register">{this.props.id}</label>
				</div>
				<div className="column-flex top" style={{width: "100%"}}>
					{this.props.children}
					<div
						style={{
							height: "2vw",
						}}
						className={
							this.props.display === ""
								? "hidden"
								: "errorText fontS"
						}
					>
						{this.props.display}
					</div>
				</div>
				<div
					style={{
						width: "10%",
					}}
				>
					{this.props.hasIcon === true ? (
						<Tippy
							position="right"
							arrow={true}
							arrowSize="small"
                            theme="info"
							html={
								<div className="info">
									<pre>{this.props.info}</pre>
								</div>
							}
						>
                            {/* <div
                                className="row-flex top"
                                style={{ width: '40%' }}> */}
								<img
									className="icon"
									alt="info"
									src={information}
									// style={{
									// 	marginLeft: "1.25vw",
									// 	marginTop: "0.25vw",
									// }}
								/>
							{/* </div> */}
						</Tippy>
					) : null}
				</div>
			</div>
		);
	}
}

export default RegisterField;
