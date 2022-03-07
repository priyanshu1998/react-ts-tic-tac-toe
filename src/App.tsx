import React, { Component } from 'react';
import  './index.css';


interface GameState{
  player: string
  positions: Array<string>
}

const EMPTY = "EMPTY";
const CIRCLE = "CIRCLE";
const CROSS = "CROSS";

class TicTacToe extends Component<{},GameState>{
  constructor(props: GameState){
    super(props);
    this.state = {
      player: "",
      positions: 
      [ EMPTY, EMPTY, CIRCLE,
        EMPTY, CROSS, EMPTY,
        CROSS, EMPTY, EMPTY,]
    }
  }
  render(){
    return (
      <div className='grid'>
        <Square position={0} value={this.state.positions[0]}/>
        <Square position={1} value={this.state.positions[1]}/>
        <Square position={2} value={this.state.positions[2]}/>
        <Square position={3} value={this.state.positions[3]}/>
        <Square position={4} value={this.state.positions[4]}/>
        <Square position={5} value={this.state.positions[5]}/>
        <Square position={6} value={this.state.positions[6]}/>
        <Square position={7} value={this.state.positions[7]}/>
        <Square position={8} value={this.state.positions[8]}/>

      </div>
    );
  }
}

interface ISquare{
  position: number
  value: string
}

class Square extends Component<ISquare>{
  render(){
    const {position, value} = this.props
    return (
      <div className='square'>
      {value === CIRCLE && <Circle/>}
      {value === CROSS && <Cross/>}
      </div>
    )
  }
}

class Circle extends Component{
  render(){
    return (
      <svg width={100} height={100} viewBox="-50 -50 100 100" className='circle'>
        <circle cx={0} cy={0} r={40}/>  
      </svg>
    )
  }
}

class Cross extends Component{
  render(){
    return(
      <svg width={100} height={100} viewBox="-50 -50 100 100" className='cross'>
        <line x1={-40} y1={-40} x2={40} y2={40}></line>
        <line x1={-40} y1={40} x2={40} y2={-40}></line>
      </svg>
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
