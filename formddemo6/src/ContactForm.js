import React, { Component } from 'react';
class ContactForm extends Component{
    constructor(props)
    {
        super(props);
       this.unameRef = React.createRef();
       this.emailRef = React.createRef();
       this.pwdRef = React.createRef();
       this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e)
    {
        e.preventDefault();
        alert(
            "You Typed:\n" +
            this.unameRef.current.value +
            "\n" +
            this.emailRef.current.value +
            "\n" +
            this.pwdRef.current.value
        );
        this.unameRef.current.value ="";
        this.emailRef.current.value ="";
        this.pwdRef.current.value ="";
        this.unameRef.current.focus();
    }
    render()
    {
        return(
            <div>
                <h2>Contact Form</h2>
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor='name'>Name</label>
                  <input type='text' id='name' 
                  ref={this.unameRef}/>
                  <br/>
                  <label htmlFor='mailid'>Email</label>
                  <input type='email' id='mailid' 
                  ref={this.emailRef}/>
                  <br/>
                  <label htmlFor='pwd'>Password</label>
                  <input type='password' id='pwd' 
                  ref={this.pwdRef}/>
                  <br/>
                  <button>submit</button>
                </form>
            </div>
        )
    }
}
export default ContactForm;