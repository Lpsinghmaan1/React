import React, { Component } from 'react';
import Counter from "./Counter"
import "bootstrap/dist/css/bootstrap.css";

class  Counters extends Component {


    render() { 
        return ( 
        <div>

            <button 
                onClick = {this.props.onReset}
                className="button btn-sm btn-primary btn m-2">Reset
            </button>

          {this.props.counters.map(counter => 
          
          <Counter 
          key={counter.id} 
          //bubling the event to the parent
          onDelete ={this.props.onDelete} 
          onIncrement = {this.props.onIncrement}
          counter = {counter}
          > 
        
          </Counter>)}
        </div> );
    }
}
 
export default Counters ;