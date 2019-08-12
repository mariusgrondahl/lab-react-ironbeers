import React, { Component } from "react";

class BeerView extends Component {
    render() {
        return(
            <div className="BeerView">
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default BeerView;