import React from 'react';
import { useState } from 'react';

export default function Counter2(props) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={()=>{
                setCount (count+1) // (count+1) 3개를 (count => count + 1)로 바꾸어보자 
                console.log(count)
                setCount (count+1)
                console.log(count)
                setCount (count+1)
                console.log(count)
            }}>+3</button>
        </div>
    );
}
// setState는 비동기적으로 작동하며, 같은 키값을 가지면 가장 마지막 실행값으로 덮어버림
// 그래서 위의 (count+1) 같은 경우엔 마지막 coount+1만 적용됨
// 여기서 (count + 1)을 콜백함수인 (count => count + 1)로 변경하면
// 항상 최신 값을 가져오기 때문에 의도한 대로 작동하는 것을 확인할 수 있음
// 물론 이 떄도 마지막 실행값이 중요함