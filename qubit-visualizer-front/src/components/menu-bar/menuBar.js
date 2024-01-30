import React from "react";
import styled from 'styled-components';
import './menuBar.css';
import Burger from "./burger";
import MenuContent from "./menuContent";

const Menu = styled.nav`
    width : 170px;
    height : 100%;
    
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