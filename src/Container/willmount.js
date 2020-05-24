import React from 'react'


class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 1 }
    }

    componentWillMount() {
        this.setState ({number: this.state.number +5});
    }

    render() {
        return (
            
            <p>{this.state.number}</p>
        );
    }

}


export default Person;