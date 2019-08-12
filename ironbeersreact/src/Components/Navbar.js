import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../Css/Navbar.css";


export default class Navbar extends Component {
    render() {
        return(
           
            <div className="Navbar">
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/beer" >All Beers</Link></li>
                    <li><Link to="/random" >Random Beers</Link></li>
                    <li><Link to="/add-beer" >Add Beers</Link></li>
                </ul>
            </div>
        )
    }
}
