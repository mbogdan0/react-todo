import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {

    return (
        <div>
            <Link to="/">Main page</Link>
            <Link to="/add">add</Link>
        </div>
    );

};

export default Menu;

