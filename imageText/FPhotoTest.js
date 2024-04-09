import React from 'react';

export default function FPhotoTest(props) {
    const url = "img/"+props.image + ".png"
    const label = props.label
    const boxStyle = {
        border: "1px soilid silver",
        margin: "8px",
        padding: "4px"
    }
    return (
        <div style={boxStyle}>
            <img src={url} width="128" alt="computer"/>
            <span>{label}</span>
        </div>
    ); //alt 없으면 에러 발생
}