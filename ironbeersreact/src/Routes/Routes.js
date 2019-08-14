import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Beer from "../Components/Beer";
import Home from "../Components/Home";
import Random from "../Components/Random";
import AddBeer from "../Components/AddBeer";
import BeerViewSingle from "../Components/BeerViewSingle";
import Sucess from "../Components/Sucess";
import Signup from "../Components/Signup";
import Login from "../Components/Login";
import Logout from "../Components/Logout";

function Routes (props) {
    return(
        <div className="Routes">
            <Route path="/" exact component={Home}/>
            <Route path="/beer" exact component={Beer}/>
            <Route path="/beer-details/:id" exact component={BeerViewSingle}/>
            <Route path="/random" exact component={Random}/>
            <Route path="/add-beer" exact component={AddBeer}/>
            <Route path="/sucess" exact component={Sucess}/>
            <Route path="/signup" exact component={Signup}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/logout" exact component={Logout}/>
        </div>
    )
}

export default Routes;

