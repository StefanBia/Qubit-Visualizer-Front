import React, { useState, useEffect } from 'react';
import './DotMovement.css'; // Import the CSS file

const DotMovement = ({selectedGate}) => {
  const [Xposition, setXPosition] = useState(0);
  const [Yposition, setYPosition] = useState(-20);
  const [secondDotOpacity, setSecondDotOpacity] = useState(0); // Initialize opacity to 1
  const [firstDotOpacity, setFirstDotOpacity] = useState(1);
  const [dotSize, setDotSize] = useState(40); // Initialize size to 40px
  const [firstDotColor, setFirstDotColor] = useState('rgb(78, 219, 43)');
  const [secondDotColor, setSecondDotColor] = useState('rgb(78, 219, 43)'); // Initialize color
  const colorRealPositive = 'linear-gradient(135deg, hsl(108, 79%, 35%), #105910)';
  const colorRealNegative = 'linear-gradient(135deg, rgb(176, 31, 31), rgb(111, 14, 14))';
  const colorImaginaryPositive = 'linear-gradient(135deg, #15afaf, #0a5959)';
  const lineLength = 600;
  let firstHalf = true;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setXPosition((prevXPosition) => {
        const newXPosition = (prevXPosition + 3) % lineLength;

        if (selectedGate === 'Pauli-X') {
          if (newXPosition > lineLength / 2 && firstHalf) {
            setSecondDotOpacity(1);
            setFirstDotOpacity(0);
            firstHalf = false;
          } else if (newXPosition < 3) {
            firstHalf = true;
            setSecondDotOpacity(0);
            setFirstDotOpacity(1);
            setDotSize(40);
            setSecondDotColor(colorRealPositive); 
            setFirstDotColor(colorRealPositive);
          }
        }

        if (selectedGate === 'Hadamard') {
          if (newXPosition > lineLength / 2 && firstHalf) {
            setSecondDotOpacity(1);
            setDotSize(30);
            setSecondDotColor(colorImaginaryPositive); 
            firstHalf = false;
          } else if (newXPosition < 3) {
            
            firstHalf = true;
            setSecondDotOpacity(0);
            setFirstDotOpacity(1);
            setDotSize(40);
            setSecondDotColor(colorRealPositive); 
            setFirstDotColor(colorRealPositive);
          }
        }

        if (selectedGate === 'Pauli-Y') {
          if (newXPosition > lineLength / 2 && firstHalf) {
            setSecondDotColor(colorImaginaryPositive);
            setSecondDotOpacity(1);
            setFirstDotOpacity(0);
            firstHalf = false;
          } else if (newXPosition < 3) {
            setSecondDotOpacity(0);
            setFirstDotOpacity(1);
            setDotSize(40);
            setSecondDotColor(colorRealPositive); 
            setFirstDotColor(colorRealPositive);
            firstHalf = true; 
          }
        }

        if (selectedGate === 'Pauli-Z') {
        
          setFirstDotColor(colorRealPositive);
          setSecondDotOpacity(0);
          setFirstDotOpacity(1);
          setDotSize(40);
        }

        return newXPosition;
      });
    }, 16);

    return () => clearInterval(intervalId);
  }, [setXPosition, selectedGate]);

  return (
    <div>
      <div className="state-zero">
        <h1>|0{'>'}</h1>
        <div className="line-container">
          <div
            className="dot"
            style={{
              transform: `translate(${Xposition}px , ${Yposition}px)`,
              opacity: firstDotOpacity,
              width: `${dotSize}px`,
              height: `${dotSize}px`,
              background: firstDotColor,
              borderRadius: '50%', // Preserve the border-radius
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add a subtle box-shadow for a 3D effect
            }}
          />
        </div>
        <h1>|0{'>'}</h1>
      </div>

      <div className="state-one">
        <h1>|1{'>'}</h1>
        <div className="line-container">
          <div
            className="dot"
            style={{
              transform: `translate(${Xposition}px , -50%)`,
              opacity: secondDotOpacity,
              width: `${dotSize}px`,
              height: `${dotSize}px`,
              background: secondDotColor,
              borderRadius: '50%', // Preserve the border-radius
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add a subtle box-shadow for a 3D effect
            }}
          />
        </div>
        <h1>|1{'>'}</h1>
      </div>
    </div>
  );
};


export default DotMovement;
