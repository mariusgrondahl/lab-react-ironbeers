import React from "react";
import { BrowserRouter as  Link } from "react-router-dom";

export default function Sucess (props) {
    return (
        <>
            <h1>You sucessfully added a Beer</h1>
            <Link  to="/">Se all beers</Link>
        </>
    )
}