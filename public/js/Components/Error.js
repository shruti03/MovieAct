//This file is responsible for showing error alert
import React from "react";
import ReactDom from "react-dom";



export default class Error extends React.Component {
    render() {
        return ( 
            <div className = "alert alert-danger" role="alert"> 
                <strong>Oh snap!</strong> No Movie found for this Keyword, Please try again.
             </div>
        )
    }
}