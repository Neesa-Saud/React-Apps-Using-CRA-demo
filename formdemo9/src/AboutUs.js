import React, { Component } from 'react'
export default class AboutUs extends Component{
    constructor(props)
    {
        super(props);
        this.state ={value:"Your views about us"};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e)
    {
      this.setState({value:e.target.value});
    }
    handleSubmit(e)
    {
       e.preventDefault();
       alert("A review was submitted :" +this.state.value);
       this.setState({value:""});
    }
    render()
    {
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='review'>Review Us</label>
                <br/>
                <textarea id='review' value={this.state.value} onChange={this.handleChange}
                />
                <br/>
                <button>Submit Review</button>
            </form>
        )
    }
}