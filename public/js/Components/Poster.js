//This file is responsible for showing Poster image component in app
import React from "react";
import ReactDom from "react-dom";



export default class Poster extends React.Component {
    render() {
        return ( 
        	<img src = { (this.props.imgurl != "N/A" ) ? this.props.imgurl : "img/default_poster.jpg"  } className = "img-responsive" />
        )
    }
}