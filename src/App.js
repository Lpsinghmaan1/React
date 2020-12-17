import React, { Component } from 'react';
import NavBar from './components/navbar';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Counters from './components/Counters';


class App extends Component() 
{
  state = { 
    counters:[
        {id: 1, value:1},
        {id: 2, value:0},
        {id: 3, value:0},
        {id: 4, value:0},
    ]
 };

 handelIncrement = counter => {
     const counters = [...this.state.counters];
     const index = counters.indexOf(counter);
     counters[index] = {...counter};
     counters[index].value++;
     this.setState({counters});
 ;}

 handleDelete = (counterID) => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    this.setState({counters : counters})
 };

 handleReset = () =>{
    const counters = this.state.counters.map(c=>{
         c.value = 0;
         return c;
     });

     this.setState({ counters });
 };

 render(){
    return ( 
      // Fragement needed as mutiple root elements are being returned
      <React.Fragment>
        <NavBar />
          <main className = "container">
            <Counters 
              counters = {this.state.counters}
              onReset = {this.handleReset}
              onIncrement = {this.handelIncrement}
              onDelete = {this.handleDelete} 
            />
          </main>
      </React.Fragment>
    );
  }

}


export default App;
