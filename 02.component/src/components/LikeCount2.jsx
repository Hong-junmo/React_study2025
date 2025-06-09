import React, { useState } from 'react'

const LikeCount2 = () => {

    let [추천, 개추] = useState(0);

    let handle = () => {
        개추(추천 - 1);
        if(추천 === 0 ) {
            개추(추천);
        }
    }

  return (
    <div className='개추'>
        <img style={{width:150, height:150}} src='./src/assets/getchu.png' alt={'개추'}/>
        <p>좋아요 {추천}</p>
        <div className='굿'>
            {/* onClick속성에 함수 실행문을 넣을 때 {()=>함수명} 형태로 정의해야 한다 */}
        <span onClick={ () => {개추(추천 + 1)} }>👍</span><span onClick={ handle }>👎</span>
        </div>
    </div>
  )
}

export default LikeCount2