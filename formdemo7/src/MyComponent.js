import React, { Component } from 'react'
import MyInput from '../MyInput'
class MyComponent extends Component {
    constructor(props)
    {
        super(props);
        this.childRef = React.createRef();
        this.handleClick = this.handleClick.bind();
    }
    handleClick(evt)
    {
      this.childRef.current.giveFocus();
    }
    render()
    {
        return(
           <div>
            <MyInput ref={this.childRef}/>
            <button onClick={this.handleClick}>Submit</button>
           </div> 
        )
    }
}
export default MyComponent;