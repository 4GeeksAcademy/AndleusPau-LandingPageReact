import React from "react";

    const pages = ['Start Bootstrap', 'About', 'Services', 'Portfolio', 'Contact']

    const navStyles = {
        background: "rgb(60, 60, 60)"
    }


    const pagesInList =  pages.map((page, i) => {
        return <li className="nav-item nav-link" href="#" key={i}><a>{page}</a></li>
    });

  const Navbar = () => {
    return(

    <div className="row">
      <nav className="navbar navbar-expand navbar-dark d-flex justify-content-center" style={navStyles}>
        <div className="container-fluid col-9">
            <div className="navbar-header">
            <a className="navbar-brand nav-link" href="#">Start Bootstrap</a>
            </div>
            <ul className=" navbar-nav navbar-right">
               {pagesInList}
            </ul>
        </div>
      </nav>
    </div>

    );
  }

  export default Navbar;


