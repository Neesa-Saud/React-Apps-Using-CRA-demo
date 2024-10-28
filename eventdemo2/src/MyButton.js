import React, { Component } from 'react'
class MyButton extends Component{
    handleClick()
    {
        let today = new Date();
        alert("Current date is time is :"+today);
    }
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>click me</button>
            </div>
        );
    }
}
export default MyButton;