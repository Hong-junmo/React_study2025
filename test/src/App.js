/* eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let content = '100';
  function 뷁() {
    return "쉿팔";
  }
  let styled = {
    color : "skyblue"
  }

  let [뻘글, 뻘글잘쓰기] = useState(['빵 맛있게 먹는 법 ', '그만 쳐 먹어', '앵간치 쳐 먹어']);
  let [num, numre] = useState(0);

  return (
    <div className="App">
      <div className='nav'>
        <div style={styled}>개발 Blog</div>
      </div>
      <div className='main'>
        {content}<br/>
        {뷁()}<br/>
        <p className='p'>GET쉿팔</p><hr/>
      </div>
      <div className='main'>
        <h1>{뻘글[0]}<span onClick={ () => {numre(num+1)} }>개추</span> {num} </h1>
        <p>그딴건 없다</p><hr/>
      </div>
      <div className='main'>
        <h1>{뻘글[1]}</h1>
        <p>미친놈아</p><hr/>
      </div>
      <div className='main'>
        <h1>{뻘글[2]}</h1>
        <p>남아나는게 없다</p>
      </div>
    </div>
  );
}

export default App;
