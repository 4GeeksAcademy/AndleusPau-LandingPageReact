//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Navbar from "./component/Navbar.jsx";
import Title from "./component/Title.jsx";
import Cards from "./component/Cards.jsx";
import Footer from "./component/Footer.jsx";


function App(){
    return(
        <div>
            <Navbar/>
            <Title/>
            <Cards/>
            <Footer/>
        </div>
    )
}


//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));

