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
