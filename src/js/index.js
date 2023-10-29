//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
window.onload = () => {
    ReactDOM.render(<Jumbo />, document.querySelector("#jumbo"));
    ReactDOM.render(<Navbar />, document.querySelector("#navbar"));
}
