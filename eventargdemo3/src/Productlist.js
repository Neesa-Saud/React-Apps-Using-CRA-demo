import React, { Component } from 'react'
import Product from './Product'
import "./Productlist.css"
export default class Productlist extends Component{
    constructor(props)
    {
        super(props);
        this.state={items: this.props.items};
        this.deleteItems = this.deleteItems.bind(this);
    }
    deleteItems(itemName,e)
    {
    let arr = this.state.items.filter((x) => x!== itemName);
    this.setState({items :arr});
    }
    render()
    {
        let List = this.state.items.map((x)=> <Product item={x} remove={this.deleteItems}/>);
        return(
            <div className='ProductList'>
                <h1>Available Products</h1>
                <hr/>
                <div><ul>{List}</ul></div>
            </div>
        )
    }
}