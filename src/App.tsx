import React, { Component } from 'react';
import  './index.css';

class TicTacToe extends Component{
  render(){
    return (
      <div className='grid'>
        <Square position={0}/>
        <Square position={1}/>
        <Square position={2}/>
        <Square position={3}/>
        <Square position={4}/>
        <Square position={5}/>
        <Square position={6}/>
        <Square position={7}/>
        <Square position={8}/>

      </div>
    );
  }
}

interface ISquare{
  position: number
}

class Square extends Component<ISquare>{
  render(){
    const {position} = this.props
    return (
      <div className='square'>{position} </div>
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
