import React from "react";
import ReactDom from "react-dom";
import Poster from "./Poster";
import Title from "./Title";
import Detail from "./Detail";



export default class List extends React.Component {
    render() {
        return ( <
            div className = "row movielist" >

            <
            div className = "col-xs-4 col-sm-4 leftImg" >
            <
            Poster imgurl = { this.props.data.Poster }
            /> < /
            div > <
            div className = "col-xs-7 col-sm-7" >
            <
            Title title = { this.props.data.Title }
            desc = { this.props.data.Plot }
            />  <
            Detail actorsName = { this.props.data.Actors }
            releasedYear = { this.props.data.Released }
            />  < /
            div > <
            /div >
        )
    }
}