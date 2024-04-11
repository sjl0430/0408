import React from 'react';
import { useState } from 'react';

export default function PlusMinus(props) {
    const [count, setCount] = useState(1)
    console.log(count)
    const add = () => {
        setCount(count+1);
    }
    const dec = () => {
        setCount(count-1);
    }

    return (
        <div>
            <h2>{count+2000}년의 나이는 {count}살입니다.</h2>
            <button onClick={add}>+</button>
            <button onClick={dec}>-</button>
        </div>
    );
}

// state 2가지