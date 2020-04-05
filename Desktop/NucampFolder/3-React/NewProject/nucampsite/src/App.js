import React from 'react';
import logo from './logo.svg';
import './App.css';
import NumberDisplayComponenet from './MemoryGame/DisplayComponent/NumberDisplayComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NumberDisplayComponenet />
      </header>
    </div>
  );
}

export default App;
