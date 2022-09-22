import React from 'react';
import './App.css';
import Login from './Components/Login';
//Create base layout for the login ( email box, password box, login button, basic styling ),
// you should use a UI Library like mui or ant.

function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
