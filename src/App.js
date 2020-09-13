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
    <div class="chessboard">
    {/* <!-- 1st --> */}
    <div class="white">&#9820;</div>
    <div class="black">&#9822;</div>
    <div class="white">&#9821;</div>
    <div class="black">&#9819;</div>
    <div class="white">&#9818;</div>
    <div class="black">&#9821;</div>
    <div class="white">&#9822;</div>
    <div class="black">&#9820;</div>
    {/* <!-- 2nd --> */}
    <div class="black">&#9821;</div>
    <div class="white">&#9821;</div>
    <div class="black">&#9821;</div>
    <div class="white">&#9821;</div>
    <div class="black">&#9821;</div>
    <div class="white">&#9821;</div>
    <div class="black">&#9821;</div>
    <div class="white">&#9821;</div>
    {/* <!-- 3th --> */}
    <div class="white"></div>
    <div class="black"></div>
    <div class="white"></div>
    <div class="black"></div>
    <div class="white"></div>
    <div class="black"></div>
    <div class="white"></div>
    <div class="black"></div>
    {/* <!-- 4st --> */}
    <div class="black"></div>
    <div class="white"></div>
    <div class="black"></div>
    <div class="white"></div>
    <div class="black"></div>
    <div class="white"></div>
    <div class="black"></div>
    <div class="white"></div>
    {/* <!-- 5th --> */}
    <div class="white"></div>
    <div class="black"></div>
    <div class="white"></div>
    <div class="black"></div>
    <div class="white"></div>
    <div class="black"></div>
    <div class="white"></div>
    <div class="black"></div>
    {/* <!-- 6th --> */}
    <div class="black"></div>
    <div class="white"></div>
    <div class="black"></div>
    <div class="white"></div>
    <div class="black"></div>
    <div class="white"></div>
    <div class="black"></div>
    <div class="white"></div>
    {/* <!-- 7th --> */}
    <div class="white">&#9817;</div>
    <div class="black">&#9817;</div>
    <div class="white">&#9817;</div>
    <div class="black">&#9817;</div>
    <div class="white">&#9817;</div>
    <div class="black">&#9817;</div>
    <div class="white">&#9817;</div>
    <div class="black">&#9817;</div>

    {/* <!-- 8th --> */}
    <div class="black">&#9814;</div>
    <div class="white">&#9816;</div>
    <div class="black">&#9815;</div>
    <div class="white">&#9813;</div>
    <div class="black">&#9812;</div>
    <div class="white">&#9815;</div>
    <div class="black">&#9816;</div>
    <div class="white">&#9814;</div>
</div>
  );
}

export default App;
