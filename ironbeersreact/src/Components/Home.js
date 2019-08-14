import React, { Component } from "react";
import LinkHero from "../Components/LinkHero";
import MainLayout from "../Layout/MainLayout";



class Home extends Component {
    render() {
        return (
            <MainLayout>
 
               <LinkHero 
                    title="All Beers" 
                    link="/beer"
                    image="../img/beers.png"
                />

                <LinkHero 
                    title="Random" 
                    link="/random"
                    image="../img/random-beer.png"
                />

                <LinkHero 
                    title="Add a Beer:D" 
                    link="/add-beer"
                    image="../img/new-beer.png"
                />
        
            </MainLayout>
        )
    }
}

export default Home;