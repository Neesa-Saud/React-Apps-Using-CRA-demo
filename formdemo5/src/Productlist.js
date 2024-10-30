import React, { Component } from 'react'
import Product from './Product'
import ProductForm from './ProductForm';
import "./Productlist.css"
export default class Productlist extends Component{
    constructor(props)
    {
        super(props);
        this.state={items: this.props.items};
        this.deleteItems = this.deleteItems.bind(this);
        this.addItems = this.addItems.bind(this);
    }
    deleteItems(itemName,e)
    {
    let arr = this.state.items.filter((x) => x.name!== itemName);
    this.setState({items :arr});
    }
    addItems(newitem)
    {let allItems = this.state.items;
        let found = false;
        for(let item of allItems)
        {
            if(item.name.trim().toLowerCase()===newitem.name.trim().toLowerCase()){
                item.qty = item.qty+Number(newitem.qty);
                found =true;
                break;
        }
    }
    if(found)
    {
        this.setState({items:allItems});
    }
    else{
        newitem.qty=Number(newitem.qty);
        this.setState((currState)=> ({items:[...currState.items,newitem]}));
    }
    }
    render()
    {
        let list = this.state.items.map((x)=> <Product item={x} remove={this.deleteItems}/>);
        return(
            <div className='ProductList'>
                <h1>Your Shopping cart</h1>
                <hr/>
                <div>
                    <table>
                        <tbody>{list}</tbody>
                    </table>
                </div>
                <hr/>
                <div>
                    <h1>Add New Product</h1>
                    <ProductForm add={this.addItems}/>
                </div>
            </div>
        );
    }
}