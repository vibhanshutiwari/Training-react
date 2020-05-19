import React from 'react';
import './App.css';
import CheckState from './Container/state'
import Hello from './Container/hello-world';



function App() {
  return (
    <div className="App">
      <Hello value  = "hello world"/>
      <CheckState/>
     
    </div>
  );
}

export default App;
