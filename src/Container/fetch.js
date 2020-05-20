import React from 'react';


class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            error: null,
            isLoader: false,
            item: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((result) => {
                
                this.setState({
                    isLoader: true,
                    item: result
              
                });
            
            },
                (error) => {
                    this.setState({
                        isLoader: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoader, item } = this.state;
        console.log(item);

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoader) {
            return <div>Loading ..</div>;
        } else {
            return (
                <ol>
                    {item.map(num => (
                        <li>
                       Id {num.id} firstName {num.name} userName {num.username}
                        </li>
                    ))}
                </ol>
            );
        }

    }
}


export default Data;