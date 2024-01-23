import React from "react";
import styled from 'styled-components';
import './menuBar.css';
import Burger from "./burger";
import MenuContent from "./menuContent";

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
            
            <Burger />
        </Menu>
    );
}
export default MenuBar;