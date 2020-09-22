import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState("남자 코트 추천");
  let [글제목2, 글제목변경2] = useState("남자 코트 추천2");
  // let [글제목, 글제목변경] = useState(["남자 코트 추천", "강남 우동 맛집"]);
  let posts = "분당 맛집";

  let [제목, 제목변경] = useState(["NodeJS", "ReactJS", "Django"]);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <div className="list">
        <h3> {제목[0]} </h3>
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
