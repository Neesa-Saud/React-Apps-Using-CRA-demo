import React, { Component } from 'react';
class Student2 extends Component {
    constructor()
    {
        super();
        this.state = {name : "Narad", roll :27};
    }
    render()
    {
        return(
            <div>
                <h1>name is : {this.state.name}</h1>
                <h1>Rollno is : {this.state.roll}</h1>
            </div>
        );
    }
}
export default Student2;