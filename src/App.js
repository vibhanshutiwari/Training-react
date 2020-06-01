import React from 'react';
import './App.css';


import Home from './reactRouter/comp-1';
import About from './reactRouter/comp-2';
import Contact from './reactRouter/comp-3';

import {BrowserRouter, Route, Switch} from 'react-router-dom';




function App() {
  return (
    <div className="container mt-4">
      <h5>click on the link and change the page..</h5>
      <ul>
        <li><a href="home">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>

      <BrowserRouter>
    <Switch>
      <Route path ="/home" component = {Home} />
      <Route path ="/about" component = {About} />
      <Route path ="/contact" component = {Contact} />
    </Switch>
</BrowserRouter>
     
    </div>

  );
}

export default App;
