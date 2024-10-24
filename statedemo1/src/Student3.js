import React, { Component } from 'react';
class Student2 extends Component {
    constructor(props)
    {
        super(props);
        this.state = {name : this.props.name , roll : this.props.roll};
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