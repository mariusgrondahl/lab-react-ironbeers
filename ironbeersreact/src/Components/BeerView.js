import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../Css/BeerView.css";


class BeerView extends Component {
    render() {
        return(
            <div className="BeerView">
                <Link to={this.props.link}><h2>{this.props.title}</h2></Link>
                <img src={this.props.image} width="50"/>
                <p>{this.props.description}</p>
                <span>{this.props.created}</span>
                <Link to={this.props.link}>Read More</Link>
            </div>
        )
    }
}

export default BeerView;