//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Cards from "./component/cards.jsx";


//render your react application
window.onload = () => {
    ReactDOM.render(<Cards />, document.querySelector("#cards"));
}
