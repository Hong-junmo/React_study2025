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

  let [뻘글, 뻘글잘쓰기] = useState(['빵 맛있게 먹는 법 ', '그만 쳐 먹어']);

  return (
    <div className="App">
      <div className='nav'>
        <div style={styled}>개발 Blog</div>
      </div>
      <div className='main'>
        {content}<br/>
        {뷁()}<br/>
        {뻘글[0]}<hr/>
      </div>
      <div>
        <p className='get'>GET쉿팔</p><hr/>
      </div>
    </div>
  );
}

export default App;
