import React, { Component } from 'react'
export default class Student extends Component{
handleClick(n,r,e){
    console.log("roll:",r,"name :",n)
}
handleargClick=(e)=>{
 this.handleClick(this.props.name,this.props.roll,e)
}
    render(){
        return(
           <p>
            Hello {this.props.name}, your rollno is {this.props.roll}
            <button onClick={this.handleargClick}>Click</button>
           </p>
        )
    }
}