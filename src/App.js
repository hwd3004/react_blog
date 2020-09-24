import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState(["NodeJS", "ReactJS", "Django"]);
  let [따봉, 따봉변경] = useState(0);

  let [누른제목, 누른제목변경] = useState(0);

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

    for (let index = 0; index < 어레이.length; index++) {
      어레이.push(<div>어레이</div>);
    }
  };

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {글제목.map((data, index) => {
        return (
          <div className="list">
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

      <button
        onClick={() => {
          누른제목변경(0);
        }}
      >
        버튼1
      </button>
      <button
        onClick={() => {
          누른제목변경(1);
        }}
      >
        버튼2
      </button>
      <button
        onClick={() => {
          누른제목변경(2);
        }}
      >
        버튼3
      </button>

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
