import { CAKE_DATA } from './uniquekey';



const object = {
    numOfCake: 10
}



const cakeReducer = (state = object, action) => {
    switch(action.type) {
        case CAKE_DATA : return {
            ...state,
            numOfCake: state.numOfCake + 1
        }
        default: return state
    }
}





export default cakeReducer;