import React from "react";


const Cards = (props)=>{
    return(
        <div className="container">
            <div className="row justify-content-center bg-white p-5 mx-0">
                <div className="row px-5 mt-0 border-bottom pb-5">
                <div className="col-3 pb-5">
                    <div className="card shadow-sm border-2">
                        <img src={props.imageUrl} alt={props.alt}/>
                        <div className="card-body">
                            <h3 className="text-center">{props.title}</h3>
                            <p className="text-center">{props.description}</p>
                        </div>
                        
                        <div className="card-footer p-2 text-center">
                            <a class="btn btn-primary" href={props.buttonLink} role="button">{props.buttonLabel}</a>
                        </div>                        
                    </div>
                </div>
                
                </div>
            </div>
        </div>
    

    );
}

export default Cards;