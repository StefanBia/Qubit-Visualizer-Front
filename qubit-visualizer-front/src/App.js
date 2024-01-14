import React, { useState } from 'react';
import './App.css';
import DotMovement from './DotMover/DotMovement';
import Workbench from './components/workbench';
import './fonts/space_age/space_age.ttf';
import './fonts/lt_aspirer_neue/LTAspirerNeue-Regular.otf';
import './fonts/quantum_4/Quantum.otf';
import SignInModal from './components/sign-in-modal/SignInModal'; 
import SignUpModal from './components/sign-up-modal/SignUpModal';

function App() {
  const [selectedGate, setSelectedGate] = useState('Pauli-X');
  const [signInOpen, setSignInOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const handleButtonClicked = (buttonLabel) => {
    if (buttonLabel === 'Sign In') {
      setSignInOpen(true);
    } else if(buttonLabel === 'Sign Up'){
      setSignUpOpen(true);
    }else{
      setSelectedGate(buttonLabel);
    }
  };

  const closeSignInModal = () => {
    setSignInOpen(false);
  };

  const closeSignUpModal = () => {
    setSignUpOpen(false);
  };

  const updateSelectedGate = (newGate) => {
    setSelectedGate(newGate);
    closeSignInModal(); 
  };

  return (
    <div>
      <div className='header'>
        <button className='menu-bar' onClick={() => handleButtonClicked('Menu')}>
          Menu
        </button>
        <h1 className='title'>Qubit Visualizer</h1>
        <div>
          <button className='sign-in-tab' onClick={() => handleButtonClicked('Sign In')}>
            Sign In
          </button>
          <button className='sign-in-tab' onClick={() => handleButtonClicked('Sign Up')}>
            Sign Up
          </button>
        </div>
      </div>

      <div className='content-panel'>
        <DotMovement selectedGate={selectedGate} />
        <div className='selected-gate'>{selectedGate}</div>
        <Workbench onButtonClicked={handleButtonClicked} />
      </div>

      
      {signInOpen && <SignInModal onClose={closeSignInModal} updateSelectedGate={updateSelectedGate}/>}
      {signUpOpen && <SignUpModal onClose={closeSignUpModal}/>}
    </div>
  );
}

export default App;
