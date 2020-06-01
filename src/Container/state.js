import React from 'react';

// Multiple Update State Key..
class StateUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state =  
            {
                name: 'shubham',
                otherperson: 'kapil',
                place: 'pune',
            }
        
        
    }

    updateHandler = () => {
        this.setState({ name: 'vibhanshu', place: 'mumbai' });
    }

    render() {
        return (
            <div>
                
                <button onClick={this.updateHandler}>update</button>
                <p> {this.state.name} {this.state.place} </p>
            </div>
        );
    }

}

export default StateUpdate;