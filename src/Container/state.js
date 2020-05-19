import React from 'react';


class Mapstate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [1, 2, 3, 4, 5, 6, 7]
        };
        // console.log(this.state.data.length);
    }

    addHandler = () => {
        let max = this.state.data.length - 1;
        this.state.data.push(this.state.data[max] + 1);
        this.setState({ data: this.state.data });
    }

    render() {
        return (
            <div>
                <p> Array length is {this.state.data.length}</p>
                <button onClick={this.addHandler}>+</button>
            </div>
        );
    }
}


export default Mapstate;