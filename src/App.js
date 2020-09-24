import React from "react";
import { useState } from "react";
import "./App.css";

class Profile extends React.Component {
  constructor() {
    super();
    this.state = { name: "Kim", age: 30 };
  }

  changeName = () => {
    this.setState({ name: "Park" });
  };

  render() {
    return (
      <div>
        <h3>저는 {this.state.name}입니다.</h3>
        <button onClick={this.changeName}>버튼</button>
      </div>
    );
  }
}

function App() {
  let [글제목, 글제목변경] = useState(["NodeJS", "ReactJS", "Django"]);
  let [따봉, 따봉변경] = useState(0);

  let [누른제목, 누른제목변경] = useState(0);

  let [입력값, 입력값변경] = useState("");

  console.log(글제목[0]);

  let [modal, modal변경] = useState(false);

  // let 모달버튼 = () => {
  //   if (modal === false) {
  //     modal변경(true);
  //   } else {
  //     modal변경(false);
  //   }
  // };

  let 반복된UI = () => {
    let 어레이 = [];

    for (let index = 0; index < 5; index++) {
      어레이.push(<div>어레이</div>);
    }
  };

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <Profile></Profile>

      {글제목.map((data, index) => {
        return (
          <div className="list" key={index}>
            <h3
              onClick={() => {
                누른제목변경(index);
              }}
            >
              {data}
              <span
                onClick={() => {
                  console.log(글제목[index]);
                }}
              >
                👍{따봉}
              </span>
            </h3>
            <p>9월 22일 발행</p>
            <hr />
          </div>
        );
      })}
      {/* <input
        onChange={(event) => {
          // console.log(event.target.value);
          입력값변경(event.target.value);
        }}
      ></input> */}
      <div className="publish">
        <input
          onChange={(event) => {
            입력값변경(event.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            // console.log(입력값);
            let 글제목카피 = [...글제목];

            글제목카피.unshift(입력값);
            // 배열 맨앞에 자료 하나 추가
            글제목변경(글제목카피);
          }}
        >
          저장
        </button>
      </div>
      <button
        onClick={() => {
          modal변경(!modal);
        }}
      >
        버튼
      </button>
      {modal === true ? (
        <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
      ) : null}
    </div>
  );
}

let Modal = (props) => {
  return (
    <div className="modal">
      {(console.log("props"), console.log(props))}
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};
// 컴포넌트로 만들어서 하는게 좋다

// 컴포넌트로 만들면 좋은지 판단하는 기준
// 반복출현하는 HTML 덩어리들
// 자주 변경되는 HTML UI들
// 다른 페이지 만들때도 컴포넌트로 만듬

// 컴포넌트 단점
// state 쓸 때 복잡해짐
// 상위 컴포넌트에서 만든 state 쓰려면 props 문법 이용해야함

export default App;
