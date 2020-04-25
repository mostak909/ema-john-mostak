import React, { Component } from 'react';

// conditional return variable elements

class Condition2 extends Component {

constructor(){
    super()

    this.state={
        login: true

    }
    
}


    render() {

        return ( 
            this.state.login? 
            (
                <h1>First</h1>
            )
            :
            (
                <h1>Secend</h1>
            )
       
        )
        
        
    }
}

export default Condition2;