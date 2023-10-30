import React from 'react';


const h1Styles = {
    fontWeight: "400" 
}

const bodyStyles = {
    background: "rgb(230, 230, 230)",
    padding: "0 3em 3em 3em"
}


const Jumbo = () => {

    return(
        <div className="row">
            <div className="d-flex justify-content-center">
                <div className="jumbotron col-9" style={bodyStyles}>
                    <h1 className="display-2" style={h1Styles}>Hola buenos días</h1>
                    <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus est fuga assumenda cupiditate facilis dolorum ab id mollitia error ea exercitationem possimus, quod tempore earum sit magnam, praesentium voluptate ut.</p>
                    <p className="my-4">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Bom dia</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Jumbo;