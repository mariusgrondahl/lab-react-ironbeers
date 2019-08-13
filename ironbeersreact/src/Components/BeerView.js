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
                <p>{this.props.created}</p>
                <Link to={this.props.link}>{this.props.buttontext}</Link>
            </div>
        )
    }
}

export default BeerView;