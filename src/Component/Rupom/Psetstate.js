import React, { Component } from 'react';

class Prsetstate extends Component {
    constructor() {
        super();

        this.state={
            name: "masud"
        }
        
    }
    changeName(a){

        this.setState({name:a})

    }
    render() {

        return (
            <div className="container">
                <h2>My name {this.state.name}</h2>
                <button onClick={this.changeName.bind(this,"Rain")}>Change Name</button>
            </div>
        );
    }
}

export default Prsetstate;