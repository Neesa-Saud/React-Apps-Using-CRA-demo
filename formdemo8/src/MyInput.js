import React, { Component } from 'react'
class MyInput extends Component{
    constructor(props)
    {
        super(props);
        this.inpref = React.createRef();
    }
   selectText()
   {
    this.inpref.current.select();
   }
   isEmpty()
   {
    return this.inpref.current.value.length===0;
   }
    render()
    {
        return(
            <div>
                <input type='text' ref={this.inpref}/>
            </div>
        )
    }
}
export default MyInput;