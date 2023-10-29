//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Footer from "./component/footer.jsx";


//render your react application
window.onload = () => {
    ReactDOM.render(<Footer />, document.querySelector("#footer"));
}
