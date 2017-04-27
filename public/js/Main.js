import React from "react";
import ReactDom from "react-dom";
import Error from "./Components/Error";
import Header from "./Components/Header";
import List from "./Components/List";
import Progress from "./Components/Progress";

class FirstComp extends React.Component {

    constructor() {
        super();

        this.state = {
            data: {},
            searchdata: [],
            showList: false,
            showError : false,
            showProgress : false,
            progresswidth : 0
        }
    }

    componentDidMount() {
        $.ajax({
            url: "http://www.omdbapi.com/?i=tt1440161",
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

                this.setState({
                    showProgress : true
                });

               var interval = setInterval(function(){ 
                this.state.progresswidth = this.state.progresswidth +10;
                }.bind(this), 3000);

                var searchval = document.getElementById("searchQuery").value;

                $.ajax({
                    url: "http://www.omdbapi.com/?s="+searchval,

                    }).then(function(resp) 
                        {
                            console.log(resp);
                            if(resp.Response == "True"){
                                     this.setState({
                                    showList: true,
                                    searchdata: resp.Search,
                                    showError: false,
                                    progresswidth : 100,
                                });
                                     clearInterval(interval);
                            }
                            else{
                                    this.setState({
                                    showError: true,
                                    showList: false,
                                   
                                    progresswidth : 100
                                    
                                });
                                     clearInterval(interval);
                            }

                            setTimeout(function(){
                                this.setState({
                                   showProgress : false
                                });
                            }.bind(this),1000)
                        }.bind(this))

    }



    render() {

        return (

            <div>
                <div>
                    <Header />
                </div>   
                <div className = "searchField" >
                    <input type = "text" placeholder = "Search" id = "searchQuery" />
                    <button className = "btn btn-primary-custom" onClick = { this.searchMovie.bind(this) } > Search </button> 
                </div>

                <div className = {(this.state.showList == false &&  this.state.showError == false ? 'show' : 'hide')} > 
                    <List data = { this.state.data } />
                </div> 

                <div className = {(this.state.showList == true ? 'show' : 'hide')} > 
                    {this.state.searchdata.map(function(key, index) {
                    return <List data = { key } key= { key.imdbID} />
                    }) }
                </div>

                <div className = {(this.state.showError == true ? 'show' : 'hide') }>
                    <Error  />
                </div>

                <div className = { 'progressdiv '+ (this.state.showProgress == true ? 'show' : 'hide') }>
                    <Progress progresswidth={this.state.progresswidth}/>
                </div>

            </div >
        )
    }


};

ReactDom.render( < FirstComp / > , document.getElementById("app"));