
import React, { Component } from 'react';

 class  Counter extends Component 
 {

//special property that has all that data that this component needs - no needed for a controller component
//state = {value: this.props.value};
// Increment button function and the DOM in the sync with the virtual DOM  
// output

    render() 
    { 
        return (
            <div>
        
                <span className={this.getBadgeClasses()}>{this.formatcount()}</span>
                
                <button onClick={() => this.props.onIncrement(this.props.counter)} 
                className ="btn btn-secondary btn-sm">Increment</button>

                <button className = "btn btn-danger btn-sm m-2" 
                onClick={ () => this.props.onDelete(this.props.counter.id)}>
                    Delete</button>

            </div>
            );
    }
    
    getBadgeClasses()
    {
       let classes = "badge m-2 badge-";
       classes += (this.props.counter.value === 0) ? "warning" : "primary";
       return classes;
    }

    formatcount()
    {
        var {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;

