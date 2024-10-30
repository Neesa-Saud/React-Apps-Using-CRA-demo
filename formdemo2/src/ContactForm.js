import React, { Component } from 'react';
class ContactForm extends Component{
    constructor(props)
    {
        super(props);
        this.state={username:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e)
    {
       this.setState({username : e.target.value});
    }
    handleSubmit(e)
    {
        e.preventDefault();
        alert("You type :" +this.state.username);
        this.setState({username :""});
    }
    render()
    {
        return(
            <div>
                <h2>Contact Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='uname'>Name</label>
                    <input
                    type='text'
                    id='uname'
                    value={this.state.username}
                    onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
                <p>You Typed:{this.state.username}</p>
            </div>
        )
    }
}
export default ContactForm;