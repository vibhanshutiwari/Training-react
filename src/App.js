import React from 'react';
import './App.css';

import store from './Homecomp/store';
import { Provider } from 'react-redux';
import Display from './Homecomp/displayvalue'
import Parent from './Homecomp/parent';




function App() {
  return (
 <Provider store = {store}> 
   
    <div className="App">
      
      <Display/>
      <Parent store={store}/>
    
    </div>
    </Provider>

    
    
  );
}

export default App;
