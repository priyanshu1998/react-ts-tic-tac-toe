import React, { Component } from 'react';
import './App.css';


class TicTacToe extends Component{
  render(){
    return (
      <div> Hello from React! </div>
    );
  }
}

class Square extends Component{
  render(){
    return (
      <div>Square</div>
    )
  }
}

class Circle extends Component{
  render(){
    return (
      <div>Circle</div>
    )
  }
}

class Cross extends Component{
  render(){
    return(
      <div>Cross</div>
    )
  }
}

class Result extends Component{
  render(){
    return(
      <div>Result</div>
    )
  }
}

export default TicTacToe;
