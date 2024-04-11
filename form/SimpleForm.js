import React, { Component } from 'react';

export class SimpleForm extends React.Component {
    constructor (props) {
        super(props)
        // 상태를 초기화
        this.state = {value: ''}
    }
    // 값 변경
    doChange (e) {
        const newValue = e.target.value
        this.setState({value: newValue})
    }    
    // 변경 버튼 클릭
    doSubmit (e) {
        window.alert('전송'+this.state.value)
        e.preventDefalut()
    }
    render() {
        // 이벤트를 메소드에 바인딩
        const doChange = (e) => this.doChange(e)
        const doSubmit = (e) => this.doSubmit(e)
        return (
            <div>
                <h1>계산하기</h1>
                <form onSubmit={doSubmit}>
                    <input type='text' value={this.state.value} onChange={doChange}/>
                    <input type='submit' value='전송'/>
                    {this.state.value}
                </form>
            </div>
        );
    }
}
