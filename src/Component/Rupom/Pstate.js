import React, { Component } from 'react';




class Statetypes extends Component {
    constructor(){
        super()

        this.state={
            name: "masud",
            age: ["28", "30", "40", "60"],
            address: {
                vill: "simul",
                rod: "4",
                Block: ["A", "B", "C"]
            } 
        
        }
    }

   

    render(){
        return (
            <div>
                <h1>My name is: {this.state.name}</h1>
                <h1>My age is: {this.state.age[2]}</h1>
                <h1>My address is: {this.state.address.Block[2]}</h1>
            

  
            </div>
        );
    }
}

export default Statetypes;