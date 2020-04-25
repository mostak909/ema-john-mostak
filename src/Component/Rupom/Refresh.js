import React, { Component } from 'react';

class Refresh extends Component {
constructor(){
    super()
    this.refresh=this.refresh.bind(this);
}

refresh(){
    this.forceUpdate();
}


    render() {
        return (
            <div>
               <button onClick={this.refresh}>Refresh</button> 
                <h1>{Math.random(999).toFixed(2)}</h1>
            </div>
        );
    }
}

export default Refresh;