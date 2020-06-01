import {FETCH_REQUEST,FETCH_USER,FETCH_FAILURE} from './cre-key'



let data = {
  loading: false,
  users: [],
  error: ''
};


const reducer = (state = data, action) => {
   

   switch(action.type) {
       case FETCH_REQUEST: 
       return {
           ...state,
           loading: true
       }
       case FETCH_USER: 
       return {
           loading: false,
           users: action.payload,
           error: ''
       }
       
       case FETCH_FAILURE:
            return {
           loading: false,
           users: [],
           error: action.payload
       }
       
       default: return state
   }
}



export default reducer;