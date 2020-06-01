import React from 'react';

// Create table and sort ascending and descemding every columns ..

class Displaytable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'name',
            data: [
                {
                    name: 'kapil',
                    phone: 8589534941,
                    email: 'kapil@gmail.com',
                    age: 30,
                    city: 'punjab',
                },
                {
                    name: 'shubham',
                    phone: 7589949442,
                    email: 'shubham@gmail.com',
                    age: 21,
                    city: 'bihar',
                },
                {
                    name: 'aman',
                    phone: 7874848384,
                    email: 'aman@gmail.com',
                    age: 32,
                    city: 'delhi',
                },
                {
                    name: 'manish',
                    phone: 8483383934,
                    email: 'manish@gmail.com',
                    age: 23,
                    city: 'mumbai',
                },
                {
                    name: 'mohit',
                    phone: 7648348391,
                    email: 'mohit@gmail.com',
                    age: 23,
                    city: 'lucknow',
                }
            ]
        }
    }

    // Dynamic select columns asc and desc..
    inputHandler = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    // Ascending true.. 
    sortHandler = () => {
        let sortField = this.state.name;
        this.setState({ data: this.sortData(true, sortField) });
    }

    // descending false..
    setHandler = () => {
        let sortField = this.state.name;
        this.setState({ data: this.sortData(false, sortField) });
    }

    // Solve asc and dsce 
    sortData = (asc, field) => {
        return this.state.data.sort((a, b) => {
            let aa = a[field], bb = b[field];
            if (asc) {
                if (aa < bb) {
                    return -1;
                }
                if (aa > bb) {
                    return 1;
                }
                return 0;
            }
            else {
                if (aa > bb) {
                    return -1;
                }
                if (aa < bb) {
                    return 1;
                }
                return 0;
            }
        });
    }

    render() {
        return (

            <div className="container mt-2">
                <span>Sort By: </span>
                <select onChange={this.inputHandler} className="ml-2 ">
                    <option value="name">name</option>
                    <option value="phone">phone</option>
                    <option value="email">email</option>
                    <option value="age">age</option>
                    <option value="city">city</option>
                </select>

                <button onClick={this.sortHandler} className="btn btn-info ml-3">asc</button> &nbsp;
                <button onClick={this.setHandler} className="btn btn-info">desc</button>

                <table className="table table-dark mt-3">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(num => (
                            <tr>
                                <td> {num.name} </td>
                                <td>{num.phone}</td>
                                <td>{num.email}</td>
                                <td>{num.age}</td>
                                <td>{num.city}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        );
    }
}





export default Displaytable;