import React, { Component } from "react";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Id: "",
      Pw1: "",
      Pw2: "",
      Email: "",
    };
  }

  doChange(e) {
    const userValue = e.target.value;
    const key = e.target.name;
    this.setState({ [key]: userValue });
  }

  doSubmit(e) {
    e.preventDefault();
    const j = JSON.stringify("회원가입 완료.");
    if (
      this.state.Id != "" &&
      this.state.Pw1 != "" &&
      this.state.Pw2 != "" &&
      this.state.Email != ""
    ) {
      if (this.state.Pw1 != this.state.Pw2)
        window.alert("비밀번호를 다시 확인해주세요.");
      else window.alert("회원가입이 완료되었습니다.");
    } else window.alert("입력하지 않은 항목이 있습니다.");
  }

  idCheck = (e) => {
    e.preventDefault();
    if (this.state.Id == "") window.alert("아이디를 입력해주세요.");
    else {
      window.alert("사용 가능한 아이디입니다.");
      
    }
  };

  render() {
    const doSubmit = (e) => this.doSubmit(e);
    const doChange = (e) => this.doChange(e);
    return (
      <form>
        <h1>회원가입</h1>
        <div>
          <label>
            아이디: <br />
            <input
              name="Id"
              type="text"
              value={this.state.name}
              onChange={doChange}
            />
          </label>
          <button onClick={this.idCheck}>중복확인</button>
        </div>
        <div>
          <label>
            비밀번호: <br />
            <input
              name="Pw1"
              type="text"
              value={this.state.name}
              onChange={doChange}
            />
          </label>
        </div>
        <div>
          <label>
            비밀번호 확인: <br />
            <input
              name="Pw2"
              type="text"
              value={this.state.name}
              onChange={doChange}
            />
          </label>
        </div>
        <div>
          <label>
            이메일: <br />
            <input
              name="Email"
              type="text"
              value={this.state.name}
              onChange={doChange}
            />
          </label>
        </div>
        <button onClick={doSubmit}>회원가입</button>
      </form>
    );
  }
}

//Form으로 할 때 idCheck 버튼의 온클릭 이벤트로도 회원가입 결과 창도 반응하기 때문에
//Form을 활용하는 방법을 조금 더 생각해야겠다.
