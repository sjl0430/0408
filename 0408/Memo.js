import React, { Component } from 'react';

export class Memo extends Component {
    constructor (props) {
        super(props)
        this.state = {value: '하고 싶은 말'}
    }
    doChange (e) {
        const newValue = e.target.value
        this.setState({value: newValue})
    }    
    doSubmit (e) {
        window.alert(this.state.value)
        e.preventDefalut()
    }
    render() {
        const doChange = (e) => this.doChange(e)
        const doSubmit = (e) => this.doSubmit(e)
        return (
            <div>
                <h3>- 메모 -</h3>
                <form onSubmit={doSubmit}>
                    <input type='text' value={this.state.value} onChange={doChange}/>
                    <input type='submit' value='입력'/>
                </form>
            </div>
        );
    }
}

//스테이트 하나