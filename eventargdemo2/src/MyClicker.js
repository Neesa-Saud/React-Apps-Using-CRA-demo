import React, { Component } from 'react'
export default class MyClicker extends Component{
constructor(props)
{
    super(props);
    this.state ={counter :1};
}
handleClick(step,e)
{
 this.setState((curstate)=>{counter : curstate.counter+step});
}
render()
{
    return(
        <div>
            <h2>The counter is :{this.state.counter}</h2>
            <button onClick={(e)=>{this.handleClick(1,e)}}>Increment by 1</button>
            <button onClick={(e)=>{this.handleClick(2,e)}}>Increment by 2</button>
            <button onClick={(e)=>{this.handleClick(3,e)}}>Increment by 3</button>
        </div>
    )
}
}