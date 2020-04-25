import React, { Component } from 'react';


// conditional return if else

class Condition1 extends Component {

constructor(){
    super()

    this.state={
        login: false

    }
}



    render() {
        if (this.state.login==true) {
            return (<button>Logout</button>)
            
        }else{
            return (<button>Login Now</button>)

        }
       
        
    }
}

export default Condition1;