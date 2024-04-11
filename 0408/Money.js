import React from 'react';
import { useState } from 'react';

export default function Money(props) {
    const [money, setMoney] = useState(0)
    const pay = () => {
        setMoney(money+10000)
    }
    const buy = () => {
        setMoney(money-10000)
    }
    
    return (
        <div>
            <h2>{props.bank}에 {money}원이 있습니다.</h2>
            <button onClick={pay}>pay</button>
            <button onClick={buy}>use</button>
        </div>
    );
}
