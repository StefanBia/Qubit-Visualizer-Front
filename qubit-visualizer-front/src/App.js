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
  const [selectedGate, setSelectedGate] = useState('Pauli-X');//Set the default value for the current gate
  const [signInOpen, setSignInOpen] = useState(false);//Set the default visibility of the sign in/up modals
  const [signUpOpen, setSignUpOpen] = useState(false);

  const handleButtonClicked = (buttonLabel) => {//Handle the click of a button
    if (buttonLabel === 'Sign In') {//TO BE MOVED OUTSIDE open the Sign In model on button click
      setSignInOpen(true);
    } else if(buttonLabel === 'Sign Up'){//TO BE MOVED OUTSIDE open the Sign Up model on button click
      setSignUpOpen(true);
    }else{
      setSelectedGate(buttonLabel);//Set the current gate to the received value
    }
  };

  const closeSignInModal = () => {//Close Sign In modal
    setSignInOpen(false);
  };

  const closeSignUpModal = () => {//Close Sign Up modal
    setSignUpOpen(false);
  };

  const updateSelectedGate = (newGate) => {//Update the selected gate to a new gate
    setSelectedGate(newGate);
    closeSignInModal(); 
  };

  return (
    <div>
      <div className='header'>
        <button className='menu-bar' >
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
