import {SHOW_DATA} from './key';



const reducers = (state = [], action) => {
   
  switch(action.type) {
      
      case  SHOW_DATA: return {
          
          num: action.payload

      }

      default: return state;
  }

}


export default reducers;


