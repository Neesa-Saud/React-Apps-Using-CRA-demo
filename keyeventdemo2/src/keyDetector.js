import React, { Component } from 'react';
export default class keyDetector extends Component{
    handleKey(e)
    {
     if(e.code ==='Enter')
     {
      alert("you typed \n" +e.target.value);
     }
     else if(e.code=== 'Escape')
     {
      let resp = window.confirm("Are you sure to erase the text ?");
      if (resp)
      {
        e.target.value="";
      }
     }
    }
    render()
    { 
        return(
          <div>
            <h1>Type your Message</h1>
            <input type='text' onKeyUp={this.handleKey} placeholder='Type a value'/>
          </div>
        );
    }
}