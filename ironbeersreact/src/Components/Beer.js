import React, { Component } from "react";
import BeerView from "../Components/BeerView";
import axios from "axios";

class Beer extends Component {
    state = {
        beers: []
    }

    componentDidMount() {
        axios.get("https://ih-beer-api.herokuapp.com/beers/")
            .then(function (response){
                console.log(response)
                this.state.beers = response
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {

        return (
            <div>
                <h1>Welcom to all beers</h1>
                <BeerView />
            </div>
        )
    }
}

export default Beer;