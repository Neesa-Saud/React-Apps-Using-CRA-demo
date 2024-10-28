import React, { Component } from 'react';
import ShoppingCart from "./ShoppingCart";
class App extends Component {
  render()
  {
    return(
      <div>
       <ShoppingCart  items = {["One-plus-mobile","Fast-track-watch"]}/>
      </div>
    );
  }
}
export default App;

