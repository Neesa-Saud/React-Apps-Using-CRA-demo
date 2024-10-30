import React, { Component } from 'react';
export default class keyDetector{
    constructor(props)
    {
        super(props);
        this.state = {key :"",code:""}
        this.handleKey = this.handleKey.bind(this);
    }
    handleKey(e)
    {
     this.setState({key:e.key,code:e.code});
    }
    render()
    {
        return(
          <div>
            <h1>Key Detector</h1>
            <h3>key:{this.state.key},code:{this.state.code}</h3>
            <input type='text' onKeyPress={this.handleKey} placeholder='Type a value'/>
          </div>
        );
    }
}