import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from 'react-router-dom';

import ListRecipes from "./ListRecipes";

const ApplicationPage = () => {
    return (
        <>
        <div>General Header</div>
        <div>
            <Switch>
                <Route path="/application/list-recipes" exact component={ListRecipes} />
                {/* <Route exact path="/application/register" component={RegisterPage} /> */}

                <Redirect to="/application/list-recipes" />
            </Switch>
        </div>
        </>
    );
}

export default ApplicationPage;