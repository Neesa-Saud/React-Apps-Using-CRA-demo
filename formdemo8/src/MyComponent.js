import React, { Component } from 'react'
import MyInput from '../MyInput'
class MyComponent extends Component {
    constructor(props)
    {
        super(props);
        this.childRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(evt)
    { 
        if(this.childRef.current.isEmpty())
        {
            alert("No textx in the textbox");
        }
        else{
        this.childRef.current.selectText();
        }
      
    }
    render()
    {
        return(
           <div>
            <MyInput ref={this.childRef}/>
            <button onClick={this.handleClick}>Submit Text</button>
           </div> 
        )
    }
}
export default MyComponent;