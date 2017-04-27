import React from "react";
import ReactDom from "react-dom";



export default class Title extends React.Component {
    render() {
        return ( <
            div >
            <
            h4 className = "fontBold" > { this.props.title } <
            /h4> <
            p className = "posterdesc" > { this.props.desc } <
            /p>         < /
            div >

        )
    }
}