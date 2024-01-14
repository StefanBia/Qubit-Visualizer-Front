import React, { useState } from 'react';
import './App.css';
import DotMovement from './DotMover/DotMovement';
import Workbench from './components/workbench';
import './fonts/space_age/space_age.ttf';
import './fonts/lt_aspirer_neue/LTAspirerNeue-Regular.otf';
import './fonts/quantum_4/Quantum.otf';
import SignInModal from './components/sign-in-modal/SignInModal'; // Import the SignInModal component

function App() {
  const [selectedGate, setSelectedGate] = useState('Pauli-X');
  const [signInOpen, setSignInOpen] = useState(false);

  const handleButtonClicked = (buttonLabel) => {
    if (buttonLabel === 'Sign In') {
      setSignInOpen(true);
    } else {
      setSelectedGate(buttonLabel);
    }
  };

  const closeSignInModal = () => {
    setSignInOpen(false);
  };

  const updateSelectedGate = (newGate) => {
    setSelectedGate(newGate);
    closeSignInModal(); // Close the modal after updating the selectedGate
  };

  return (
    <div>
      <div className='header'>
        <button className='menu-bar' onClick={() => handleButtonClicked('Menu')}>
          Menu
        </button>
        <h1 className='title'>Qubit Visualizer</h1>
        <button className='sign-in-tab' onClick={() => handleButtonClicked('Sign In')}>
          Sign In
        </button>
      </div>

      <div className='content-panel'>
        <DotMovement selectedGate={selectedGate} />
        <div className='selected-gate'>{selectedGate}</div>
        <Workbench onButtonClicked={handleButtonClicked} />
      </div>

      {/* Conditionally render the SignInModal component */}
      {signInOpen && <SignInModal onClose={closeSignInModal} updateSelectedGate={updateSelectedGate}/>}
    </div>
  );
}

export default App;
