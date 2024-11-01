import React, { Component } from 'react'
class MyInput extends Component{
    constructor(props)
    {
        super(props);
        this.inpref = React.createRef();
    }
    giveFocus()
    {
        this.inpref.current.focus();
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