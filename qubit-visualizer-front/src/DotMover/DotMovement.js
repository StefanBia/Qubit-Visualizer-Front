import React, { useState, useEffect } from 'react';
import './DotMovement.css'; // Import the CSS file

const DotMovement = () => {
  const [Xposition, setXPosition] = useState(0);
  const [Yposition, setYPosition] = useState(-20);
  const [secondDotOpacity, setSecondDotOpacity] = useState(0); // Initialize opacity to 1
  const [dotSize, setDotSize] = useState(40); // Initialize size to 40px
  const [firstDotColor, setFirstDotColor] = useState('rgb(78, 219, 43)');
  const [secondDotColor, setSecondDotColor] = useState('rgb(78, 219, 43)'); // Initialize color
  const lineLength = 600;
  let firstHalf = true;
  let gate = 'y';

  useEffect(() => {
    const intervalId = setInterval(() => {
      setXPosition((prevXPosition) => {
        const newXPosition = (prevXPosition + 3) % lineLength;

        if (gate === 'x') {
          if (newXPosition > lineLength / 2 && firstHalf) {
            setYPosition((prevYPosition) => prevYPosition + 85);
            setSecondDotOpacity(1);
            firstHalf = false;
          } else if (newXPosition < 3) {
            setYPosition(-20);
            firstHalf = true;
            setSecondDotOpacity(0);
          }
        }

        if (gate === 'h') {
          if (newXPosition > lineLength / 2 && firstHalf) {
            setSecondDotOpacity(1);
            setDotSize(30);
            setSecondDotColor('cyan'); 
            firstHalf = false;
          } else if (newXPosition < 3) {
            setYPosition(-20);
            firstHalf = true;
            setSecondDotOpacity(0);
            setDotSize(40);
            setSecondDotColor('rgb(78, 219, 43)'); 
          }
        }

        if (gate === 'y') {
          if (newXPosition > lineLength / 2 && firstHalf) {
            setFirstDotColor('rgb(191, 55, 55)');
            firstHalf = false;
          } else if (newXPosition < 3) {
            setFirstDotColor('rgb(78, 219, 43)');
            firstHalf = true; 
          }
        }

        return newXPosition;
      });
    }, 16);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="state-zero">
        <h1>|0{'>'}</h1>
          <div className="line-container">
            <div
              className="dot"
              style={{
                transform: `translate(${Xposition}px , ${Yposition}px)`,
                opacity: 1,
                width: `${dotSize}px`,
                height: `${dotSize}px`,
                background: firstDotColor
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
            }}
          />
        </div>
        <h1>|1{'>'}</h1>
      </div>
    </div>
  );
};

export default DotMovement;
