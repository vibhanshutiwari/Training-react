import React, { useEffect } from "react"
import { FetchApidata } from './cre-action'
import { connect } from "react-redux";


function Display({  userData, FetchApi }) {

    useEffect(() => {
        FetchApi();
    });


    return  userData.loading ?
        (
            <h2>loading </h2>
        )
        :  userData.error ?
            (
                <h2>{ userData.error}</h2>
            )
            : (
                <div>
                    <h2>loading list</h2>
                    <div>
                        { userData &&  userData.users &&  userData.users.map(user => <p>{user.name}</p>)}
                    </div>
                </div>
            )
}


const mapStateToProps = state => {
    console.log(state.users);
    return {
        userData: state
    
    }
}

const mapDispatchToProps = dispatch => {
    return {
        FetchApi: () => FetchApidata()
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(Display);