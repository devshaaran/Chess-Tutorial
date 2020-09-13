import React, { useState } from 'react';
import './App.css';
import Button from './containers/Button/Button';
import ChessBoard from './components /ChessBoard/ChessBoard';

//state

function App() {
  
  const [color, setcolor] = useState("black")

  //component
  //states
  //props

  return (
    //JSX Code
    <div className="chessboard">
      <ChessBoard />
    </div>
  );
}

export default App;
