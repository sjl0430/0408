import React from 'react';
import { useState } from 'react';

export default function Counter(props) {
    const [count, setCount] = useState(0);
    console.log(count)
    const plus = ()=> {
        setCount(count+1);
    }
    const minus = () => {
        setCount(count-1);
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div>
    );
}
