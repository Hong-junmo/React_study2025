import React from "react";
import { useState } from "react";

const Count = () => {
    let count = 0;

    let [숫자, 변경] = useState(0);

    const handleClick = () => {
        count += 1;
        console.log("일반변수:", count);
    }
    
    const handleClick2 = () => {
        변경(숫자 + 1);
        console.log("state", 숫자)
    }

    return (
        <>
            <div>
                <p>일반변수 : {count}</p>
                <button onClick={handleClick}>클릭+1</button>
            </div>
            <div>
                <p>state : {숫자}</p>
                <button onClick={handleClick2}>클릭+1</button>
            </div>
        </>
    )
}

export default Count