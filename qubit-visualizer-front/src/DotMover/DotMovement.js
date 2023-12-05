import React, { useState, useEffect } from 'react';
import './DotMovement.css'; // Import the CSS file

const DotMovement = () => {
  const [position, setPosition] = useState(0);
  const lineLength = 300;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((prevPosition) => (prevPosition + 1) % lineLength);
    }, 16);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="line-container">
      <div
        className="dot"
        style={{ transform: `translateX(${position}px)` }}
      />
    </div>
  );
};

export default DotMovement;