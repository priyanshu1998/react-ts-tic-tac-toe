import React, { Component } from 'react';
import './index.css';


interface GameState {
  player: string
  positions: Array<string>,
}

const EMPTY = "EMPTY";
const CIRCLE = "CIRCLE";
const CROSS = "CROSS";

class TicTacToe extends Component<{}, GameState>{
  constructor(props: GameState) {
    super(props);
    this.state = {
      player: "CROSS",
      positions: [
        EMPTY, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY,
        EMPTY, EMPTY, EMPTY,
      ],
    }
  }


  onClickEvent = (index: number) => {
    
    let positions = [...this.state.positions]
    positions[index] = this.state.player
    this.setState({ positions: positions })

    this.state.player === CIRCLE && this.setState({ player: CROSS })
    this.state.player === CROSS && this.setState({ player: CIRCLE })
  }

  render() {
    return (
      <div className='grid'>
        <Square position={0} value={this.state.positions[0]} cb={this.onClickEvent} />
        <Square position={1} value={this.state.positions[1]} cb={this.onClickEvent} />
        <Square position={2} value={this.state.positions[2]} cb={this.onClickEvent} />
        <Square position={3} value={this.state.positions[3]} cb={this.onClickEvent} />
        <Square position={4} value={this.state.positions[4]} cb={this.onClickEvent} />
        <Square position={5} value={this.state.positions[5]} cb={this.onClickEvent} />
        <Square position={6} value={this.state.positions[6]} cb={this.onClickEvent} />
        <Square position={7} value={this.state.positions[7]} cb={this.onClickEvent} />
        <Square position={8} value={this.state.positions[8]} cb={this.onClickEvent} />

      </div>
    );
  }
}

interface ISquare {
  position: number
  value: string
  cb: Function
}

class Square extends Component<ISquare>{
  render() {
    const { position, value, cb } = this.props
    return (
      <div className='square' onClick={() => cb(position)}>
        {value === CIRCLE && <Circle />}
        {value === CROSS && <Cross />}
      </div>
    )
  }
}

class Circle extends Component {
  render() {
    return (
      <svg width={100} height={100} viewBox="-50 -50 100 100" className='circle'>
        <circle cx={0} cy={0} r={40} />
      </svg>
    )
  }
}

class Cross extends Component {
  render() {
    return (
      <svg width={100} height={100} viewBox="-50 -50 100 100" className='cross'>
        <line x1={-40} y1={-40} x2={40} y2={40}></line>
        <line x1={-40} y1={40} x2={40} y2={-40}></line>
      </svg>
    )
  }
}

class Result extends Component {
  render() {
    return (
      <div>Result</div>
    )
  }
}

export default TicTacToe;
