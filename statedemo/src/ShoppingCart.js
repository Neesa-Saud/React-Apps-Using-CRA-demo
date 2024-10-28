import React, { Component } from 'react';
class ShoppingCart extends Component {
    constructor(props)
    {
        super(props);
        this.state = {items : this.props.items , total : this.props.items.length};
        setTimeout(this.updateCart ,5000);
    }
    updateCart = ()=>{
       let newArr = [...this.state.items,"Dell Inspiron Laptop"];
       let newTotal = this.state.total +1; 
       this.setState({items : newArr , total : newTotal});
    }
    render()
    {
        return(
            <div>
             <h3>Your Cart Details !!!!</h3>
             <h4>Product Details : {this.state.items.join()}</h4>
             <h4>Product counting : {this.state.total}</h4>
            </div>
        )
    }
}
export default ShoppingCart;