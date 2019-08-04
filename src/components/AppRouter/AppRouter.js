import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppRoot from "../AppRoot/AppRoot";

const AppRouter = () => {

    return (
        <Router>
            <Route path="/" exact component={AppRoot} />
        </Router>
    );

};

export default AppRouter;