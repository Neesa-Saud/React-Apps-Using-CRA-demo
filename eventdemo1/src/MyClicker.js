import React, { Component } from 'react'
class MyClicker extends Component{
    constructor (props)
    {
        super(props)
        this.state = {counter:1};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e)
    {
        this.setState({counter : this.state.counter +1})
    }
    render(){
        return(
            <div>
                <h2>Counter is : {this.state.counter}</h2>
                <button onClick={this.handleClick}>click me</button>
            </div>
        );
    }
}
export default MyClicker;