import React from "react";
import "./menuContent.css";
import { useNavigate } from "react-router-dom";

const MenuContent = ({ open }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("../../pages/tutorial");  // Use navigate instead of history.push
    };

    return (
        <div className="menu-content" open={open}>
            <button className="menu-button" onClick={handleClick}>Tutorial</button>
            <button className="menu-button">About Us</button>
            <button className="menu-button">More</button>
        </div>
    );
};

export default MenuContent;
