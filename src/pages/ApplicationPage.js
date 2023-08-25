import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';

import ListRecipesPage from "./RecipesPages/ListRecipesPage";
import { RecipesProvider } from "../context/RecipesContext";
import RegisterRecipePage from "./RecipesPages/RegisterRecipePage";
import Navbar from "../components/UIComponents/HeaderComponent";

const ApplicationPage = () => {
    return (
        <>
            <div className="container" style={{ position: 'fixed', top: '80%', left: '80%' }}>
                <ul>
                    <li>
                        <Link to="/application/list-recipes">Enlistar Recetas</Link>

                    </li>
                    <li>
                        <Link to="/application/register">Crear Nueva Receta</Link>

                    </li>
                </ul>
            </div>
            <RecipesProvider>
                <Navbar></Navbar>
                <Switch>
                    <Route path="/application/list-recipes" exact component={ListRecipesPage} />
                    <Route path="/application/register" exact component={RegisterRecipePage} />

                    <Redirect to="/application/list-recipes" />
                </Switch>
            </RecipesProvider>
        </>
    );
}

export default ApplicationPage;