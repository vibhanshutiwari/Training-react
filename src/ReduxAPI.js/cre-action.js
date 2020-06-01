import {FETCH_REQUEST,FETCH_USER,FETCH_FAILURE} from './cre-key'
import axios from 'axios'


export const fetchRequest = () => {
    return {
        type:  FETCH_REQUEST
    };
}

  const fetchUser = users => {
    return {
        type: FETCH_USER,
        payload: users
    };
}


 const fetchFailure = error => {
    return {
        type: FETCH_FAILURE,
        payload: error
        
    };
}



 export const FetchApidata = () => {
     console.log('called');
    return (dispatch) => {
        console.log('inside called');
        dispatch(fetchRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response); 
          const users =  response.data;
          dispatch(fetchUser(users))
        })
        .catch(error => {
            console.log(error); 
            const errormess = error.message
            dispatch(fetchFailure(errormess))
        })
        
    }
}

