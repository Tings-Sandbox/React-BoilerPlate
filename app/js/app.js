import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';


export class App extends Component {
  render(){
    return (
      <div>
      HI THERE BOBBY!
      </div>
    );
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById("app-root")
);
