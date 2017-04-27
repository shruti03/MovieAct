import React from "react";
import ReactDom from "react-dom";



export default class Detail extends React.Component {
    render() {
        return ( <
            div >
            <
            h5 className = "fontBold" > Other Details < /h5> <
            span className = "fontBold" > Actors Name: < /span> <span> {this.props.actorsName} </span > < br / >
            <
            span className = "fontBold" > Released year: < /span> <span> {this.props.releasedYear} </span >
            <
            /div>    
        )
    }
}