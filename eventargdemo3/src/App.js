import React, { Component } from 'react';
import Productlist from './Productlist';
class App extends Component {
  render()
  {
    return(
      <div style={{textAlign :"center"}}>
       <Productlist 
       items ={[
        "Earphones",
        "Laptop",
        "Computer",
        "Mobile",
        "Telephone",
        "Camera"
       ]}
       />
      </div>
    );
}
}
export default App;

