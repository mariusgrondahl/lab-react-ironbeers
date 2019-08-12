import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../Css/BeerView.css";
import axios from "axios";
import BeerView from "./BeerView";


class BeerViewSingle extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            response: [],
        };
      }

    componentDidMount() {
        // Catching the params from the URL
        let params = this.props.match.params.id
        let URL = "https://ih-beers-api.herokuapp.com/beers/" + params;
        //Great hack for making "this" work
        var self = this;
        axios.get(URL)
            .then(function (response){
                self.setState({response: response.data})
            })
            .catch(function (error) {
                return error;
            });
    }

    render() {
        console.log(this.state.response.name)
            
        return(
            <BeerView title={this.state.response.name} 
                      description={this.state.response.description}
                      image={this.state.response.image_url}            
            />
        )
    }
}

export default BeerViewSingle;