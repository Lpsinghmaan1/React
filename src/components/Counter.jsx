
import React, { Component } from 'react';

 class  Counter extends Component 
 {

    //special property that has all that data that this component needs
    state = {
        value: this.props.value
    };

    // Increment button function and the DOM in the sync with the virtual DOM

   handleIncrement = () => {
       this.setState({value: this.state.value + 1});
       }

   
    // output
    render() 
    { 
        return (
            <div>
        
                <span className={this.getBadgeClasses()}>{this.formatcount()}</span>
                
                <button onClick={() => {this.handleIncrement()}} 
                className ="btn btn-secondary btn-sm">Increment</button>

                <button className = "btn btn-danger btn-sm m-2" 
                onClick={ () => this.props.onDelete(this.props.id)}>
                    Delete</button>

            </div>
            );
    }

    getBadgeClasses() {
         let classes = "badge m-2 badge-";
         classes += (this.state.value === 0) ? "warning" : "primary";
         return classes;
     }

    formatcount()
    {
        const {value: count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;

