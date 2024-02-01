import React from "react";
import "./menuContent.css";
import {useHistory} from "react-router-dom";
import { Route } from "react-router-dom";



const MenuContent = ({open}) => {
    const history = useHistory();

    const handleClick = () => {
        history.push("../../pages/tutorial");
    }

    return(
        <div className="menu-content" open = {open}>
            <button className="menu-button" onClick={handleClick}>Tutorial</button>
            <button className="menu-button">About Us</button>
            <button className="menu-button">More</button>
        </div>
    );

}

export default MenuContent;