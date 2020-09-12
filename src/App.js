import React, { useState } from 'react';
import './App.css';
import Button from './containers/Button/Button';

//state

function App() {
  
  const [color, setcolor] = useState("black")

  //component
  //states
  //props

  return (
    //JSX Code
    <div className="App">
      <Button button_color = {color}/>
      <Button button_color = {color}/>
      <Button button_color = {color}/>
      <Button button_color = {color}/>

      <button onClick={() => setcolor("blue")}>Click to change color</button>
    </div>
  );
}

export default App;
