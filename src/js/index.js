//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Cards from "./component/cards.jsx";


//render your react application
window.onload = () => {

    ReactDOM.render(<Cards 
        imageUrl ="https://placeholder.shopfinejewelry.com/500x325" 
        alt = "Imagen de muestra"
        title = "Card Title"
        description = "Esta es una descripción de muestra"
        buttonLink = "#"
        buttonLabel = "Tell Me More!"/>, document.querySelector("#cards")
    ); 
       
}
