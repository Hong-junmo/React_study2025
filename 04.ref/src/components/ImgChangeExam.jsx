import React from 'react'
import { useState } from 'react';
import { useRef } from 'react'

const ImgChangeExam = () => {

  const photo = useRef("");

  const [pt, setp] = useState({img : "./src/assets/false.jpeg"});

  const button = (e) => {
    e.preventDefault();
    if (photo.current.value === "개추"){
        setp({img : "./src/assets/i13786259476.png"})
    } else if(photo.current.value === "비추") {
        setp({img : "./src/assets/false.jpeg"})
    }
    else {
        alert("땡")
    }
}

    //입력창의 내용을 초기화하고 해당 요소를 선택(focus)하는 기능
    // photo.current.value = '';
    // photo.current.focus();

  return (
    <div>
        <p>희망하는 사진이 있으신가요?</p>
        <form>
            <input type='text' ref={photo}></input>
            <button onClick={button}>변경</button>
        </form>
        <img src={pt.img}/>
    </div>
  )
}

export default ImgChangeExam