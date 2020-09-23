import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  // let [글제목, 글제목변경] = useState("남자 코트 추천");
  // let [글제목2, 글제목변경2] = useState("남자 코트 추천2");
  // let [글제목, 글제목변경] = useState(["남자 코트 추천", "강남 우동 맛집"]);
  // let posts = "분당 맛집";

  let [제목, 제목변경] = useState(["NodeJS", "ReactJS", "Django"]);

  let [따봉, 따봉변경] = useState(0);

  const 제목바꾸기 = () => {
    // 제목변경(["Python", "ReactJS", "Django"]);
    // 무식하지만 쉬운 방법

    // const newArray = 제목;
    // state 직접 건들지말고 복사본을 만들어서 수정
    // 근데 이렇게 하면 복사가 아니라 값 공유임
    // reference data type(참조형 데이터 타입) 특징

    const newArray = [...제목];
    // deep copy는 서로 값 공유가 일어나지않고,
    // 완전히 새로운 복사본을 하나 생성
    // ...(스프레드 오퍼레이터)는 es6 문법
    // 오브젝트도 {...제목} 이런식으로 하면 됨
    // 이해 안되면, 그냥 외워서 쓰면 된다.

    newArray[0] = "Python";

    제목변경(newArray);
  };

  const 정렬 = () => {
    let newArray = [...제목];

    newArray = newArray.sort();

    제목변경(newArray);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <button onClick={제목바꾸기}>버튼</button>
      <button onClick={정렬}>정렬</button>

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
    </div>
  );
}

export default App;
