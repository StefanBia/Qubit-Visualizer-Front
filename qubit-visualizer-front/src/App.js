import logo from './logo.svg';
import './App.css';
import DotMovement from './DotMover/DotMovement';

function App() {
  return (
    <div>
      <h1>Qubit One</h1>
      <DotMovement />
      <div className='line-container'></div>
    </div>
  );
}

export default App;
