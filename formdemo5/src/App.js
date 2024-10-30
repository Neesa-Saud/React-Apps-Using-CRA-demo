import React, { Component } from 'react';
import Productlist from './Productlist';
class App extends Component {
  render()
  {
    return(
      <div style={{textAlign :"center"}}>
       <Productlist 
       items ={[
       { name :"Earphones",qty: 2},
        {name :"Laptop",qty:3},
       { name :"Computer",qty:2},
        {name :"Mobile",qty:1},
        {name :"Telephone",qty:5},
        {name :"Camera",qty:8}
       ]}
       />
      </div>
    );
}
}
export default App;

