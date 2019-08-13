import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios"
import BeerView from "../Components/BeerView";


class Random extends Component {

    constructor(props) {
        super(props);
        this.state = {
            response: []
        };

    }

    componentDidMount() {
        // Setting the APIURL
        let URL = "https://ih-beers-api.herokuapp.com/beers/random";
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
        return (
            <BeerView title={this.state.response.name} 
                      description={this.state.response.description}
                      image={this.state.response.image_url}            
            />
        )
    }
}

export default Random;