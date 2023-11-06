import React from "react";


const Cards = (props)=>{
    return(
    <div className="container m-0">
      <div className="row justify-content-center bg-white mx-0 px-0 pb-0">
        <div className="card shadow-sm border-2 p-0">
          <img src={props.imageUrl} alt={props.alt} />
          <div className="card-body p-2">
            <h3 className="text-center">{props.title}</h3>
            <p className="text-center">{props.description}</p>
          </div>
          <div className="card-footer p-2 text-center">
            <a className="btn btn-primary" href={props.buttonLink} role="button">
              {props.buttonLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;