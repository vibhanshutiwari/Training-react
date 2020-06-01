import React from 'react';
import { connect } from 'react-redux';




function Display (props) {

    return (
        <div>
       <h2> Number of cake {props.num}</h2>
        </div>

    )
    
}



const mapStateToProps = state => {
    return {
        num: state.numOfCake
    }
}


export default connect(mapStateToProps)(Display);