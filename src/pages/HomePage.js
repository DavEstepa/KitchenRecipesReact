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
    <div className="container mt-5">
        <div className="row">
            <div className="col">
                <h1 className="m-5 text-center">Bienvenido</h1>
                <p className="text-center">Si desea crear un receta, de click al siguiente botón:</p>

                <Link to='/application' style={{ display: 'block', textDecoration: 'None' }} className="text-center">
                    <h3>
                    <img style={{height: '50px'}} src={process.env.PUBLIC_URL + 'icons/Home/apps.svg'} />Iniciar Aplicación
                    </h3>
                </Link>
            </div>
        </div>
    </div> );
}

export default HomePage;