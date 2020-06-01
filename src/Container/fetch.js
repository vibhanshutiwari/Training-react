import React from 'react';

// Fetching Data From API..
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
                <div className="containe">
                    <div className="col-md-8">
                        
                        <table className=" table table-dark">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>UserName</th>
                                </tr>
                            </thead>
                            <tbody>
                                {item.map(num => (
                                    <tr>
                                        <td>{num.id}</td>
                                        <td>{num.name}</td>
                                        <td>{num.username}</td>
                                    </tr>

                                ))}
                            </tbody>
                        </table>
                        <p>fetch data from API..</p>
                    </div>
                </div>

            );
        }

    }
}


export default Data;