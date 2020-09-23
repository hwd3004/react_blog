import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  let [제목, 제목변경] = useState(["NodeJS", "ReactJS", "Django"]);
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <div className="list">
        <h3>
          {제목[0]}
          <span
            // onClick={() => {
            //   console.log('1');
            // }}
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          {따봉}
        </h3>
        <p>9월 22일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h3> {제목[1]} </h3>
        <p>9월 22일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h3> {제목[2]} </h3>
        <p>9월 22일 발행</p>
        <hr />
      </div>

      <Modal />
    </div>
  );
}

let Modal = () => {
  return (
    <div className="modal">
      <h2>제목</h2>
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
