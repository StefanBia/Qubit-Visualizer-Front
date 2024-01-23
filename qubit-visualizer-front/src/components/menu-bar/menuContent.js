import React from "react";
import "./menuContent.css";



const MenuContent = ({open}) => {

    return(
        <div className="menu-content" open = {open}>
            <ul>
                <li>About Us</li>
                <li>More</li>
            </ul>
        </div>
    );

}

export default MenuContent;