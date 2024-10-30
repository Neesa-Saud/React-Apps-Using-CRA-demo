import React, { Component } from 'react';
import "./ProductForm.css";
export default class ProductForm extends Component{
    constructor(props)
    {
        super(props);
        this.state = {name:"",qty:""};
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }
    handleChange(e)
    {
    this.setState({[e.target.name]:e.target.value});
    }
    handleSubmit(e)
    {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({name:"",qty:""})
    }
    render()
    {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='pname'>Item name</label>
                    <br/>
                    <input
                    type='text'
                    id='pname'
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                    />
                    <label htmlFor='qty'>Quantity</label>
                    <br/>
                    <input
                    type='text'
                    id='qty'
                    name='qty'
                    value={this.state.qty}
                    onChange={this.handleChange}
                    />
                    <br/>
                    <button>Add to cart</button>
                </form>
            </div>
        )
    }
}