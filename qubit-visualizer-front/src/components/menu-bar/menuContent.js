import React from "react";
import "./menuContent.css";



const MenuContent = ({open}) => {

    return(
        <div className="menu-content" open = {open}>
            <button>About Us</button>
            <button>More</button>
        </div>
    );

}

export default MenuContent;