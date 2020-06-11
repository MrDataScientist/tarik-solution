import React from 'react';
import logo from './logo.svg';
import './App.css';

import PersonList from './Components/item-list'

import ItemList2 from './Components/Items/item-list2' // TODO: working

import Carousel from './Components/carousel';

import Table from './Components/table'

import Header from './Components/Header/header';

//       <header className="App-header" />

function App() {
  return (
    <>
    <div className="Carousel">
      <ItemList2  />
    </div>
    </>
  );
}

export default App;
