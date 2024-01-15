import React from 'react';
import './workbench.css';

const Workbench = ({ onButtonClicked }) => {
  const renderButton = (label, operation) => (//Create gate button and send the operation to the Dot Mover
    <button className="square-button" onClick={() => onButtonClicked(operation)}>
      {label}
    </button>
  );

  return (
    <div className="workbench">
      {renderButton('X', 'Pauli-X')}
      {renderButton('Y', 'Pauli-Y')}
      {renderButton('Z', 'Pauli-Z')}
      {renderButton('H', 'Hadamard')}
    </div>
  );
};

export default Workbench;
