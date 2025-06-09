import React, { useState } from 'react'

/* 
    실습) 숫자 맞추기
    1. 버튼을 클릭 했을 때 랜덤한 숫자 생성하기(1~3)
     - parseInt(Math.random() * 3) + 1

    2. 사용자가 누른 버튼의 값과 랜덤한 숫자 비교하기
     - 정답인 경우 -> "정답입니다~!"
     - 틀린 경우 -> "땡~!"
     *누른 버튼의 값 가져오는 방법 -> event.target.innerText
*/
const BattleNumber = () => {

    let [num, setnum] = useState(0);
    let [random, setrandom] = useState(0);
    let [땡, 정답] = useState("");
    let handle = (e) => {
        let getrandom= parseInt(Math.random() * 3) + 1;
        let getNum = parseInt(e.target.innerText);
        setnum(getNum);
        setrandom(getrandom);
        정답(getNum===getrandom?"정답입니다":"땡");
    }

  return (
    <div>
        <button onClick={ handle }>1</button>
        <button onClick={ handle }>2</button>
        <button onClick={ handle }>3</button>
        <p>내가 입력한 숫자 : {num}</p>
        <p>랜덤한 숫자 : {random}</p>
        <p>{땡}</p>
    </div>
  )
}

export default BattleNumber