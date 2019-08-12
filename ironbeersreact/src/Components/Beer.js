import React, { Component } from "react";
import BeerView from "../Components/BeerView";
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Beer extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            response: [],
        };
      }

    componentDidMount() {
        //Great hack for making "this" work
        var self = this;
        axios.get("https://ih-beers-api.herokuapp.com/beers")
            .then(function (response){
                self.setState({response: response.data})
            })
            .catch(function (error) {
                return error;
            });
    }
    render() {
        let Beers = this.state.response.map((beer)=> {
            return(
                    
                    <BeerView title={beer.name} 
                              description={beer.description}
                              image={beer.image_url}
                              created={beer.contributed_by}
                              link={`/beer-details/${beer._id}`}
                              
                    />
        
            )})

        return (
            <div>
                <h1>Welcome to all beers</h1>
                <div className="Container">
                    {Beers}
                </div>
            </div>
        )
    }
}

export default Beer;