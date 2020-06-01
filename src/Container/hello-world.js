import React from 'react';

// Display Hello-World Using Props Function..
class Hello extends React.Component {
    render() {
        return (
            <div className="hello-id">
                <h1>{this.props.value}</h1>
            </div>
        );
    }
}




export default Hello;

