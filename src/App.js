import './App.css';
import React from 'react';
import Navbar from './Components/navbar/Navbar';
import Banner from './Components/banner/Banner';
import Item from './Components/item/Item';
import {actions,originals,trending,comedy,horror,document,romance} from './urls';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner />
      <Item url={originals} title='Netflix Originals'/>
      <Item url={actions} title='Action Movies' isSmall/>
      <Item url={trending} title='Trending Movies' isSmall/>
      <Item url={comedy} title='Comedy Movies' isSmall/>
      <Item url={horror} title='Horror Movies' isSmall/>
      <Item url={romance} title='Romantic Movies' isSmall/>
      <Item url={document} title='Documentary' isSmall/>
    </div>
  );
}

export default App;
