import React from 'react';

const Propstypes = (props) => {
    return (
        <div className="container">
            <h1>This is Props</h1>
            <h1>My Name: {props.name} , My age: {props.age} , My Vill:{props.vill}</h1>
            
        </div>
    );
};

export default Propstypes;