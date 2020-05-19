import React from 'react';


class CheckInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''

        };
    }

    onchangeHandler = (e) => {
        this.setState({name: e.target.value });
    }


    render() {
        return (
            <div className="mt-4">
                <input type="text" name="name" onChange={this.onchangeHandler} />
                <p>{this.state.name}</p>
            </div>
        );
    }
}


export default CheckInput;
