import React from 'react';
import logo from './logo.svg';
import './App.css';

import PersonList from './Components/item-list'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonList  />
      </header>
    </div>
  );
}

export default App;
