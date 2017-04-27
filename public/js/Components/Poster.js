import React from "react";
import ReactDom from "react-dom";



export default class Poster extends React.Component {
    render() {
        return ( <
            img src = { this.props.imgurl }
            alt = "Smiley face"
            className = "img-responsive img-circle" / >
        )
    }
}