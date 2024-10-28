import React, { Component } from 'react'
class MyButton extends Component{
    constructor(props)
    {
        super(props)
        this.state ={num :1};
        this.Randnum = this.Randnum.bind(this);
    }
   Randnum()
    {
     let num = math.floor(Math.random()*10)+1;
    }
    render(){
        return(
            <div>
                <h2>Current Random number is : {this.state.num}</h2>
                {this.state.num ===6 ?
                (<h3>You Win</h3>) :
                (<button onClick={this.Randnum}>Generate new random number</button>)
                }
            </div>
        );
    }
}
export default MyButton;