import React, { useState } from 'react';
import './App.css';
import DotMovement from './DotMover/DotMovement';
import Workbench from './components/workbench';
import './fonts/space_age/space_age.ttf';
import './fonts/lt_aspirer_neue/LTAspirerNeue-Regular.otf';
import './fonts/quantum_4/Quantum.otf';
import SignInModal from './components/sign-in-modal/SignInModal'; 
import SignUpModal from './components/sign-up-modal/SignUpModal';
import MenuBar from './components/menu-bar/menuBar';
import { BrowserRouter as Router, Route,Switch,Link } from 'react-router-dom';
import Tutorial from './pages/tutorial';

function App() {
  const [selectedGate, setSelectedGate] = useState('Pauli-X');//Set the default value for the current gate
  const [gateText, setGateText] = useState('Pauli-X');//Default value of the text explaining the gate
  const [signInOpen, setSignInOpen] = useState(false);//Set the default visibility of the sign in/up modals
  const [signUpOpen, setSignUpOpen] = useState(false);
  const paulixText = 'The Pauli-X gate is a single-qubit rotation through π radians around the x-axis.';
  const pauliyText = 'The Pauli-Y gate is a single-qubit rotation through π radians around the y-axis.';
  const paulizText = 'The Pauli-Z gate is a single-qubit rotation through π radians around the z-axis.';
  const hadamardText = 'The Hadamard gate creates a superposition of the states 0 and 1.';

  const handleButtonClicked = (buttonLabel) => {//Handle the click of a button
    if (buttonLabel === 'Sign In') {//TO BE MOVED OUTSIDE open the Sign In model on button click
      setSignInOpen(true);
    } else if(buttonLabel === 'Sign Up'){//TO BE MOVED OUTSIDE open the Sign Up model on button click
      setSignUpOpen(true);
    }else{
      setSelectedGate(buttonLabel);//Set the current gate to the received value
    }
    updateGateText(buttonLabel);//Update the text explainig the gate
  };

  const closeSignInModal = () => {//Close Sign In modal
    setSignInOpen(false);
  };

  const closeSignUpModal = () => {//Close Sign Up modal
    setSignUpOpen(false);
  };

  const updateGateText = (selectedGate) => {
    
    if(selectedGate === "Pauli-X")
      setGateText(paulixText);
    else if(selectedGate === "Pauli-Y")
      setGateText(pauliyText);
    else if(selectedGate === "Pauli-Z")
      setGateText(paulizText);
    else if(selectedGate === "Hadamard")
      setGateText(hadamardText);
  }

  const updateSelectedGate = (newGate) => {//Update the selected gate to a new gate
    setSelectedGate(newGate);
    updateGateText(newGate);
    closeSignInModal(); 
  };


  return (
    <div>
      <div className='header'>
        <MenuBar/>
        <h1 className='title'>Qubit Visualizer</h1>
        <div className='sign-bar'>
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

      <div className='gate-text-container'>
      {gateText}
      </div>

      
      {signInOpen && <SignInModal onClose={closeSignInModal} updateSelectedGate={updateSelectedGate}/>}
      {signUpOpen && <SignUpModal onClose={closeSignUpModal}/>}
    </div>
  );
}

export default App;
