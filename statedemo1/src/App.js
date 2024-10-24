import React, { Component } from 'react';
import Student1 from "./Student1";
import Student2 from "./Student2";
import Student3 from "./Student3";
class App extends Component {
  render()
  {
    return(
      <div>
       <Student1 />
       <Student2 />
       <Student3 name= "Rohan" roll ={12}/>
      </div>
    );
  }
}
export default App;

