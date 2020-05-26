import React from 'react';
import { connect } from 'react-redux';




function Display(props) {
    return (
        <div className="container mt-5">
            <h4 className="text-muted" >Display data from store</h4>
            <div>
                <label>Id : {props.nums?.id}</label> <br></br>
                <label>Name : {props.nums?.name}</label> <br></br>
                <label>Address : {props.nums?.address}</label> <br></br>
                <label>Job : {props.nums?.job}</label> <br></br>
                <label>City : {props.nums?.city}</label> <br></br>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    console.log(state);
    return {
        nums: state.num
    }

}


export default connect(mapStateToProps)(Display);