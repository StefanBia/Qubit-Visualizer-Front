import './App.css';
import DotMovement from './DotMover/DotMovement';
import Workbench from './components/workbench';
import { useState } from 'react';

function App() {
  const [selectedGate, setSelectedGate] = useState('X');

  const handleButtonClicked = (buttonLabel) =>{
    setSelectedGate(buttonLabel);
  }

  return (
    <div>
      <div className='header'>
        <h1>Qubit Visualizer</h1>
      </div>
      <DotMovement selectedGate={selectedGate} />
      <Workbench onButtonClicked={handleButtonClicked} />
    </div>
  );
}

export default App;
