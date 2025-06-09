import React from 'react'
import { useState } from 'react'

const LikeCount = () => {

    let [num, setNum] = useState(0);
    let [emoji, setEmoji] = useState("🤍");

    let handleClick = () => {
        if(emoji === "🤍") {
            setEmoji("💘");
            setNum(1);
        } else {
            setEmoji("🤍");
            setNum(0);
        }
    }

  return (
    <div>
        <img style={{width: 200, height: 200}} src={"src/assets/getchu.png"} alt={"개추"}/>
        <p><span onClick={handleClick}>{emoji}</span>좋아요 {num}개</p>
    </div>
  )
}

export default LikeCount