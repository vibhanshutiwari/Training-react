import React from 'react';


class Mapstate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: 'manish',
                    job: 'service manager',
                    area: 'navi mumbai'

                }
            ]

        };
    }

    render() {
        return (
            <div>
                {this.state.data.map((num, index) => (
                    <h4>My self {num.name} i am {num.job} i am from {num.area}  </h4>

                )
                )}
            </div>
        );
    }
}


export default Mapstate;