import React, { Component } from "react";
import LinkHero from "../Components/LinkHero";



class Home extends Component {
    render() {
        return (
            <div className="Container">
               <LinkHero 
                    title="All Beers" 
                    link="/"
                    image="../img/beers.png"
                />

                <LinkHero 
                    title="Random" 
                    link="/"
                    image="../img/random-beer.png"
                />

                <LinkHero 
                    title="Add a Beer:D" 
                    link="/"
                    image="../img/new-beer.png"
                />
        
            </div>
        )
    }
}

export default Home;