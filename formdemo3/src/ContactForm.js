import React, { Component } from 'react';
class ContactForm extends Component{
    constructor(props)
    {
        super(props);
        this.state={username:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.value ="";
    }
    handleChange(e)
    {
       this.setState({username : e.target.value,submitted : false});
    }
    handleSubmit(e)
    {
        e.preventDefault();
        this.value = this.state.username;
        this.setState({username :"",submitted:true});
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
            {this.state.submitted && <p>You typed : {this.value}</p>}
            </div>
        )
    }
}
export default ContactForm;