import React, { Component } from 'react';
import Student from './Student';
class App extends Component {
  render()
  {
    return(
      <div>
       <Student name="Amit" roll ="12"/>
       <Student name="Amrit" roll ="11"/>
      </div>
    );
}
}
export default App;

