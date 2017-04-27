import React from "react";
import ReactDom from "react-dom";
import Header from "./Components/Header";
import List from "./Components/List";

class FirstComp extends React.Component {

    constructor() {
        super();

        this.state = {
            data: {},
            searchdata: [],
            showList: false
        }
    }

    componentDidMount() {
        $.ajax({
            url: "data.json",
        }).then(function(resp) {
            console.log(resp);
            this.setState({
                data: resp
            });
        }.bind(this), function(err) {
            console.log(err);
        })

    }

    searchMovie() {

        var searchval = document.getElementById("searchQuery").value;

        $.ajax({
            url: "multipledata.json",
        }).then(function(resp) {
            console.log(resp);
            this.setState({
                showList: true,
                searchdata: resp
            });
        }.bind(this), function(err) {
            console.log(err);
        })

    }



    render() {

        return (

            <
            div >
            <
            div >
            <
            Header / >
            <
            /div>   <
            div className = "searchField" >
            <
            input type = "text"
            placeholder = "Search"
            id = "searchQuery" / >
            <
            button className = "btn btn-primary-custom"
            onClick = { this.searchMovie.bind(this) } > Search < /button> < /
            div >

            <
            div className = {
                (this.state.showList == false ? 'show' : 'hide')
            } > <
            List data = { this.state.data }
            /></div > <
            div className = {
                (this.state.showList == true ? 'show' : 'hide')
            } > {
                this.state.searchdata.map(function(key, index) {
                    return <
                        List data = { key }
                    />
                })
            }

            <
            /div> < /
            div >
        )
    }


};

ReactDom.render( < FirstComp / > , document.getElementById("app"));