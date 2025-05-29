// import { useState } from "react"
import React from 'react'

const App2 = () => {
    let name = prompt("너의 이름은?");

    // 날짜, 시간 관련 정보를 가진 객체
    let today = new Date();
    console.log(today);
    console.log(today.toLocaleDateString()); // 현지 시간 기준 날짜(년/월/일) 반환
    console.log(today.getMonth()+1); // 현지 시간 기준 월을 0~11까지의 값으로 출력하므로 정확한 값을 내려면 .getMonth()+1을 해주면 된다
    let date = (today.toLocaleDateString());

    ;
    let Month = (today.getMonth()+1);
    let month = "";
    if (Month >= 3 && Month <= 5) {
        month = "봄"
    } else if (Month >= 6 && Month <= 8) {
        month = "여름"
    } else if (Month >= 9 && Month <= 11) {
        month = "가을"
    } else if (Month === 12 || Month <=2) {
        month = "겨울"
    }
  return (
    <div>
        <h1>{date}</h1><hr/>
        <p>{name}님 안녕하세요 지금은 {month}입니다 좋은 하루 보내세요:)</p>
        <button>
            <a href='https://namu.wiki/w/%EC%A3%BD%EC%9D%8C'><img src='https://media.tenor.com/zTxEbUz6FWEAAAAe/%EA%B7%B8%EB%9F%BC%EC%A3%BD%EC%96%B44-%EA%B0%9C%EC%A3%BD%EC%9D%B4.png' width={250} height={250}></img></a>
        </button>
        <button>
            <a href='https://namu.wiki/w/%EC%8B%A0%EC%95%99'><img src='https://i1.ruliweb.com/img/22/11/14/18474423c2e4e956b.png' width={250} height={250}></img></a>
        </button>
    </div>
  )
}

export default App2