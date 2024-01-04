import React, { useState, useEffect } from 'react';
import './workbench.css';

const Workbench = ({ onButtonClicked }) => {
    return (
      <div className="workbench">
        <button className="square-button" onClick={() => onButtonClicked('X')}>
          X
        </button>
        <button className="square-button" onClick={() => onButtonClicked('Y')}>
          Y
        </button>
        <button className="square-button" onClick={() => onButtonClicked('Z')}>
          Z
        </button>
        <button className="square-button" onClick={() => onButtonClicked('H')}>
          H
        </button>
      </div>
    );
  };
  

export default Workbench;
