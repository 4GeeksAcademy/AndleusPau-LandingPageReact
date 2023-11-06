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
            <div className="container">
                <div className="row mt-4 mb-5 p-0">
                <div className="col-md-3">
                    <Cards
                    imageUrl="https://placeholder.shopfinejewelry.com/500x325"
                    alt="Texto alternativo de la imagen"
                    title="Card Title"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur sollicitudin justo. Nulla fermentum, lectus sed sodales eleifend, nisi velit ultrices turpis, et egestas neque est quis elit."
                    buttonLink="#"
                    buttonLabel="Tell Me More!"
                    />
                </div>
                <div className="col-md-3">
                    <Cards
                    imageUrl="https://placeholder.shopfinejewelry.com/500x325"
                    alt="Texto alternativo de la imagen"
                    title="Card Title"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur sollicitudin justo. Nulla fermentum, lectus sed sodales eleifend, nisi velit ultrices turpis, et egestas neque est quis elit."
                    buttonLink="#"
                    buttonLabel="Tell Me More!"
                    />
                </div>
                <div className="col-md-3">
                    <Cards
                    imageUrl="https://placeholder.shopfinejewelry.com/500x325"
                    alt="Texto alternativo de la imagen"
                    title="Card Title"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur sollicitudin justo. Nulla fermentum, lectus sed sodales eleifend, nisi velit ultrices turpis, et egestas neque est quis elit."
                    buttonLink="#"
                    buttonLabel="Tell Me More!"
                    />
                </div>
                <div className="col-md-3">
                    <Cards
                    imageUrl="https://placeholder.shopfinejewelry.com/500x325"
                    alt="Texto alternativo de la imagen"
                    title="Card Title"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur sollicitudin justo. Nulla fermentum, lectus sed sodales eleifend, nisi velit ultrices turpis, et egestas neque est quis elit."
                    buttonLink="#"
                    buttonLabel="Tell Me More!"
                    />
                </div>
                </div>
      </div>
            <Footer/>
        </div>
    )
}


//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));

