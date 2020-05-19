import React from 'react';


class CheckState extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           value: 1

       };
   }

   onclickHandler = () => {
       this.setState({value: this.state.value + 1});
   }

   onHandler = () => {
    this.setState({value: this.state.value - 1});
}


    render() {
        return (
   <div>  
       <p>{this.state.value}</p>
       <button onClick = {this.onclickHandler}> +</button>
       <button onClick = {this.onHandler}> -</button>
   </div>
        );
    }
}


export default CheckState;