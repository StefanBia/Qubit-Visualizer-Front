import React from 'react';
import './workbench.css';

const Workbench = ({ onButtonClicked }) => {
  const renderButton = (label, operation) => (
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
