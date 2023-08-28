import React from "react";

import {
    useLocation
  } from 'react-router-dom';


function Navbar() {
    const actualRoute = useLocation()
    console.log(actualRoute)

    return (
        <nav className="navbar navbar-light" style={{backgroundColor: '#f9d6b1'}}>
            <div className="container-fluid">
                <a className="navbar-brand">Secrets Steps</a>

                {(actualRoute.pathname === '/application/register' ||
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>)
                }
                
            </div>
        </nav>);
}

export default Navbar;