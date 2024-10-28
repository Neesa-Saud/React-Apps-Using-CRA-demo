import React, { Component } from 'react'
class MyClicker extends Component{
    constructor (props)
    {
        super(props)
        this.state = {counter:1};
        this.handleClick = this.handleClick.bind(this);
        this.handletripleClick = this.handletripleClick.bind(this);
    }
    handleClick(e)
    {
        this.setState({counter : this.state.counter +1})
    }
    increment(currstate)
    {
        return ({counter : currstate.counter+1});
    }
    handletripleClick(e)
    {
        this.setState(this.increment);
        this.setState(this.increment);
        this.setState(this.increment);
    }
    render(){
        return(
            <div>
                <h2>Counter is : {this.state.counter}</h2>
                <button onClick={this.handleClick}>increment by 1</button>
                <button onClick={this.handletripleClick}>increment by 3</button>
            </div>
        );
    }
}
export default MyClicker;