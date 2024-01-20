import React, { useState } from "react";
import styled from "styled-components";
import './burger.css';

const StyledBurger = styled.div`
    width : 2rem;
    height : 2rem;
    position : fixed;
    top : 15px;
    left : 20px;
    display : flex;
    justify-content : space-around;
    flex-flow : column nowrap;
`

const Burger = () =>{
    return(
        <StyledBurger>
            <div className="burger-item"/>
            <div className="burger-item"/>
            <div className="burger-item"/>
        </StyledBurger>
    );
}

export default Burger;