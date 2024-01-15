import React, { useState, useEffect } from 'react';
import './DotMovement.css'; 

const DotMovement = ({selectedGate}) => {
  const [Xposition, setXPosition] = useState(0);//Set initial position of the dots
  const [Yposition, setYPosition] = useState(-20);//TO BE CHANGED
  const [secondDotOpacity, setSecondDotOpacity] = useState(0); //Set initial opacity of the dot, visible from the starting state
  const [firstDotOpacity, setFirstDotOpacity] = useState(1);
  const [dotSize, setDotSize] = useState(40); //Set the size of the dot
  const [firstDotColor, setFirstDotColor] = useState('linear-gradient(135deg, hsl(108, 79%, 35%), #105910)');//Set initial color of the dot linear gradient for 3D effect
  const [secondDotColor, setSecondDotColor] = useState('linear-gradient(135deg, hsl(108, 79%, 35%), #105910)'); 
  const colorRealPositive = 'linear-gradient(135deg, hsl(108, 79%, 35%), #105910)';//Define the color for each possible values of the state
  const colorRealNegative = 'linear-gradient(135deg, rgb(176, 31, 31), rgb(111, 14, 14))';
  const colorImaginaryPositive = 'linear-gradient(135deg, #15afaf, #0a5959)';
  const lineLength = 600;//Define the length of the line between the states
  let firstHalf = true;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setXPosition((prevXPosition) => {
        const newXPosition = (prevXPosition + 3) % lineLength;//Trigger the movement of the dot along the line 

        if (selectedGate === 'Pauli-X') {//Set the first dot to invisible and set the second dot to visible
          if (newXPosition > lineLength / 2 && firstHalf) {//TO BE CHANGED to switch case
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

        if (selectedGate === 'Hadamard') {//Set both dots visible, make them smaller
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

        if (selectedGate === 'Pauli-Y') {//Set first dot invisible, second visible and different color
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

        if (selectedGate === 'Pauli-Z') {//Does nothing for state 0
        
          setFirstDotColor(colorRealPositive);
          setSecondDotOpacity(0);
          setFirstDotOpacity(1);
          setDotSize(40);
        }

        return newXPosition;//Return the new position of the dot
      });
    }, 16);

    return () => clearInterval(intervalId);
  }, [setXPosition, selectedGate]);

  return (
    <div>
      <div className="state-zero">
        <h1 className='state-icon'>| 0 {'>'}</h1>
        <div className="line-container">
          <div
            className="dot"
            style={{
              transform: `translate(${Xposition}px , ${Yposition}px)`,//Update the position of the dot, Yposition redundant for now
              opacity: firstDotOpacity,
              width: `${dotSize}px`,//Update according to selected gate
              height: `${dotSize}px`,
              background: firstDotColor,
              borderRadius: '50%', // Preserve the border-radius
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add a subtle box-shadow for a 3D effect
            }}
          />
        </div>
        <h1 className='state-icon'>| 0 {'>'}</h1>
      </div>

      <div className="state-one">
        <h1 className='state-icon'>| 1 {'>'}</h1>
        <div className="line-container">
          <div
            className="dot"
            style={{
              transform: `translate(${Xposition}px , -50%)`,//Move second dot at the same speed as the first one
              opacity: secondDotOpacity,
              width: `${dotSize}px`,//Update according to selected gate
              height: `${dotSize}px`,
              background: secondDotColor,
              borderRadius: '50%', // Preserve the border-radius
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add a subtle box-shadow for a 3D effect
            }}
          />
        </div>
        <h1 className='state-icon'>| 1 {'>'}</h1>
      </div>
    </div>
  );
};


export default DotMovement;
