import React from "react";
import styled from 'styled-components';
import './menuBar.css';
import Burger from "./burger";

const Menu = styled.nav`
    width : 100%;
    height : 65px;
    border-bottom : 2px solid #f1f1f1;
    padding : 0 20px;
    display : flex;
    justify-content: space-between;
`
const MenuBar = () =>{
    return(
        <Menu>
            <div className="menu-bar-button">
                Menu
            </div>
            <Burger />
            
            <ul className="menu-list">
                <li className="menu-item">Home</li>
                <li className="menu-item">About Us</li>
                <li className="menu-item">More</li>
            </ul>
        </Menu>
    );
}
export default MenuBar;