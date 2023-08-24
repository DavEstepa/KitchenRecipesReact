import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useLocation
  } from 'react-router-dom';

  
function HomePage() {
    return (
    <div className="container">
        <div className="row">
            <div className="col">
                <h1 className="m-5 text-center">Bienvenido</h1>
                <p className="text-center">Si desea crear un receta, de click al siguiente botón:</p>
                <Link to='/application'>
                    Recipies
                </Link>
            </div>
        </div>
    </div> );
}

export default HomePage;