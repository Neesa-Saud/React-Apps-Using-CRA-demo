import React, { Component } from 'react';
class Student1 extends Component {
    state = {name : "Amit", roll :120};
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
export default Student1;