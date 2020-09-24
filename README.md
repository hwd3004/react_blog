# 1. R e a c t

---

# 2. state에 데이터 저장하는 이유

웹이 앱처럼 동작하게 만드는 핵심
state로 만들어진 데이터가 변경이 될 때,
데이터를 담고 있는 html이 자동으로 리-렌더링 됨.
html이 새로고침 없이 스무스하게 변경됨.

그냥 변수로 만든 데이터는 값이 변경되면 새로고침이 됨.

---

# 3. state 데이터 수정 - deep copy

---

# 4. 모달창으로 띄우는 상세 페이지

---

# 5. 따봉버튼 새로 만들기

---

# 6. 따봉버튼 새로 만들기가 잘안되네...

---

# 7. props: 자식 컴포넌트가 부모 컴포넌트의 state 쓰는 방법

{modal === true ? <Modal 작명={전송할 state} ></Modal> : null}

let Modal = (props) => {
return (

<div className="modal">
{(console.log("props"), console.log(props))}
<h2>{props.글제목[0]}</h2>
<p>날짜</p>
<p>상세내용</p>
</div>
);
};

---

# 8. prps를 응용한 상세페이지 만들기

let [누른제목, 누른제목변경] = useState(0);

{글제목.map((data, index) => {
return (

<div className="list">
<h3
onClick={() => {
누른제목변경(index);
}} >
{data}
<span
onClick={() => {
console.log(글제목[index]);
}} >
👍{따봉}
</span>
</h3>
<p>9월 22일 발행</p>
<hr />
</div>
);
})}

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

---

# 9. 사용자가 입력한 글을 변수에 저장하는 법

---

# 10 블로그 글발행 기능 만들기

---

# 11. 옛날 문법 class 컴포넌트

신문법으로 만든 state 변경함수들은 아예 state를 바꿔치기해주는 역할인데
예전문법 setState()는 딱 필요한 부분만 수정해주고 나머지는 건들지 않는다.
신문법으로 했던 1. state 복사본 만들고, 2. 수정하고, 3. 복사본을 집어넣는 것을 안해도 된다.
