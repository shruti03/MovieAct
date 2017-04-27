//This file is responsible for showing Progress bar component in app
import React from "react";
import ReactDom from "react-dom";



export default class Progress extends React.Component {
    render() {
        return ( 
            <div className="progress progress-striped active">
				<div className= { 'width'+this.props.progresswidth+' progress-bar'} ></div>
			</div>
        )
    }
}