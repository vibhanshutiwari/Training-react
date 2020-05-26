import React from 'react';
import showdata from './action'



class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : {
                id: 1,
                name: 'Shubham',
                address: 'Shakarpur',
                job: 'Teacher',
                city: 'Delhi'

                
            }
        };
    }

    clickHandler = () => {
        
        this.setState({data:this.state});
      this.props.store.dispatch(showdata(this.state.data));

    }

    render() {
        return (
            <div className="container mt-3">
               <h4 className="text-muted">Push data to store</h4>
                <button onClick={this.clickHandler} className="btn btn-info">click</button>
            </div>
        )
    }
}


export default Parent;

