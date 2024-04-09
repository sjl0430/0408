import React, { Component } from 'react';

export default class Member extends Component {
    constructor(props) {
        super(props); // 이거 안 하면 this 못 씀
        this.state = {
            name:'홍길동',
            age: '300',
            job: '개발'
        };
    }
    render() {
        const {name, age, job} = this.state;
        return (
            <div>
                <div>name: {name}</div>
                <div>age: {age}</div>
                <div>job: {job}</div>
            </div>
        );
    }
}
// constructor를 쓰면 클래스 constructor 안에 this.state = {}; 형태로 선언
// 안 쓰면 state = {}; 형태로 선언