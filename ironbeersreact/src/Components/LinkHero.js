import React, { Component }  from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "../Css/LinkHero.css";


class LinkHero extends Component {
    render(){
        var styling = {
            backgroundImage: 'url(' + this.props.image + ')',
          };
    return(
        <div className="LinkHero" style={styling}>
            <Link to={this.props.link}></Link>
            <h1>{this.props.title}</h1>
        </div>

    )
}
}
export default LinkHero