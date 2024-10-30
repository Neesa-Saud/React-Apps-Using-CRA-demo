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
        <tr className='Product'>
            <td>{this.props.item}</td>
            <button onClick={this.handleClick}>Delete</button>
        </tr>
        );
    }
}
export default Product;