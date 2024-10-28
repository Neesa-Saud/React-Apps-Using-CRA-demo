import React, { Component } from 'react'
import "./Product.css";
class Product extends Component{
    constructor(props)
    {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e)
    {
    this.props.remove(this.props.item,e);
    }
    render()
    {
        return(
        <li className='Product'>
            <span>{this.props.item}</span>
            <button onClick={this.handleClick}>Delete</button>
        </li>
        );
    }
}
export default Product;