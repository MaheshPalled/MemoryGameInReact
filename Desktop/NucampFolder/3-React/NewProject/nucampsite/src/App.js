import React from 'react';
import logo from './logo.svg';
import './App.css';
import NumberDisplayComponenet from './MemoryGame/DisplayComponent/NumberDisplayComponent';
import DisplayWelcomePage from './MemoryGame/DisplayComponent/DisplayWelcomePage';
import NumberDataComponent from './MemoryGame/DisplayComponent/NumberDataComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/' exact strict component={NumberDisplayComponenet}/>
        <Route path='/welcome/'  strict render ={({match})=> (<DisplayWelcomePage userName={match.params.userName}/>)}/>
        <Route path='/welcome/'  strict component={NumberDataComponent}/>
      </div>
    </Router>
  );
}

export default App;
