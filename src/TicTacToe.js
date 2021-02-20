import React from 'react';
import './TicTacToe.css'

const CreateBoard=()=>{
return(
<div className="board">{
board.map((item, index) => {
      return <div className="cell" key={ index }><span>{ item }</span></div>
    })
  }
  </div>)

}
const board = [
  'x', null, 'o', 
  'o', 'x', null,
  'x', 'o', null
];

const TicTacToe = () => {
  return (<div className="tic-tac-toe">
    <h1>Tic-Tac-Toe</h1>
    <CreateBoard/>
  </div>)
}

export default TicTacToe;