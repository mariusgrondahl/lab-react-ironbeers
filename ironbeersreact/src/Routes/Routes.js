import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Beer from "../Components/Beer";
import Home from "../Components/Home";
import Random from "../Components/Random";
import AddBeer from "../Components/AddBeer";

function Routes (props) {
    return(
        <div className="Routes">
            <Route path="/" exact component={Home}/>
            <Route path="/beer" exact component={Beer}/>
            <Route path="/beer-details" exact component={Beer}/>
            <Route path="/random" exact component={Random}/>
            <Route path="/add-beer" exact component={AddBeer}/>
        </div>
    )
}

export default Routes;

