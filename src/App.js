import React from 'react';
import './App.css';

import PersonList from './Components/item-list'
import Header from './Components/header/header';

import { Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';

function App() {
  return (
    <div className="App">
       <Header />
        <Switch>
          <Route exact path='/' component={PersonList} />
        </Switch>
    </div>
  );
}

export default App;
