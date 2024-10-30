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
        this.setState({[e.target.name] : e.target.value});
    }
    handleSubmit(e)
    {
        e.preventDefault();
        alert(
            "you typed:\n"+
            this.state.username +
            "\n" +
            this.state.useremail +
            "\n"+
            this.state.userpwd
        );
        this.setState({username :"",submitted:true});
    }
    render()
    {
        return(
            <div>
                <h2>Contact Form</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='uname'>Name</label>
                    <br/>
                    <input
                    type='text'
                    id='uname'
                    name='username'
                    value={this.state.username}
                    onChange={this.handleChange}
                    />
                    <span>{this.state.username}</span>
                    <label htmlFor='mailid'>Email</label>
                    <br/>
                    <input
                    type='email'
                    id='mailid'
                    name='useremail'
                    value={this.state.useremail}
                    onChange={this.handleChange}
                    />
                    <span>{this.state.useremail}</span>
                    <label htmlFor='pwd'>Password</label>
                    <br/>
                    <input
                    type='password'
                    id='pwd'
                    name='userpwd'
                    value={this.state.userpwd}
                    onChange={this.handleChange}
                    />
                    <span>{this.state.userpwd}</span>
                    <br/>
                    <button>Submit</button>
                </form>
            {this.state.submitted && <p>You typed : {this.value}</p>}
            </div>
        )
    }
}
export default ContactForm;