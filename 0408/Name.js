import React from 'react';

export default function Name(props) {
    return (
        <div>
                <h2>저는 {props.name}입니다. </h2>
                <h2><d style={{color: props.color}}>{props.colorName}</d>을 좋아합니다.</h2>
        </div>
    );
}

// props 3가지