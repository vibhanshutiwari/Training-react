import {SHOW_DATA} from './key';



const showdata = (para) => {
    console.log(para);
    return {
        type: SHOW_DATA,
        payload: para
    }
}

export default showdata;