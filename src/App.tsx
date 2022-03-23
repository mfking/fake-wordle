import React from 'react';
import logo from './logo.svg';
import './App.css';
import Row from './Components/Row';

function App() {
  return (
    <div className="App">
      <Row word="test" guessedLetters={[]} />
    </div>
  );
}

export default App;
