import React, { useState } from "react";
import './App.css';


function App() {        // 얘도 실은 컴포넌트

  let post = '블로그 글 제목 1';
  let [글제목, a] = useState(['남자 코트 추천', '여자 코트 추천', '아기 코트 추천']);   // 글제목 : state의 이름, a : state 변경을 도와주는 함수
  let [좋아요개수, 좋아요개수변경함수] = useState(0);

  function 클릭함수() {
    좋아요개수변경함수(좋아요개수+1)        // <state 변경> : state를 정의할 때 썼던 함수를 써야 함. 괄호 안에는 변경할 새로운 state 값 입력.
  }

  {
    let arr = [1, 2, 3];    // : array/object를 담은 변수(arr)엔 array/object 자체가 아니라, 그게 어디 저장되어있는지 가리키는 화살표만 저장됨. array/object는 미지의 공간(RAM)에 저장되어 있음.
  }

  function 클릭함수2() {
    let copy = [...글제목];        // copy를 하나 만듦으로써 원본을 훼손하지 않음!
    copy[0]='여자 코트 추천';       // array를 수정하는 문법. but 변수 자체에 저장되어 있는 'array 저장 위치에 대한 화살표'는 바뀌지 않음.
                                     // 변수1, 변수2의 화살표가 같으면 == 취급. state변경함수에서 기존값과 새로운값이 ==이면 변경을 해 주지 않음.
                                        // => [...글제목]으로 새로운 array를 만들어주면 됨 : 새로운 화살표를 가지는 것   (...:괄호 제거, []:다시 괄호 씌우기)
    a(copy);                      // state변경함수 -> 기존의 useState() 괄호 안에 있는 값을 바꾸는 것. 괄호 안에 있는 게 전부 다 바뀜!!
  }

  function 가나다정렬함수() {
    let copy = [...글제목];
    copy.sort();
    a(copy);
  }

  return (
    <div className="App">

      <div className="App1">
        <h4>블로그 상단 박스(로고)</h4>
      </div>

      <button onClick={가나다정렬함수}>글제목 가나다순 정렬</button>

      <div className="list">
        <h4>{ 글제목[0] } <span onClick={클릭함수}>👍</span> {좋아요개수} </h4>    {/* onClick : 해당 요소를 클릭했을 때 특정 자바스크립트 코드가 실행되게 하는 이벤트 핸들러. {}안에는 함수가 들어가야 함. */}
        <p>2월 17일 발행</p>
      </div>

      <button onClick={클릭함수2}>첫 글 제목 변경 버튼</button>

      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>

      {/*
      <div className="Mordal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>                                
      */}
      <Mordal/>                               {/* div 한 덩어리를 component로 축약 */}
      
    </div>   
  );

}

function Mordal() {                            // 컴포넌트의 정의가 다른 function 안에 있으면 안 됨
  return(                                      // 컴포턴트의 정의 코드 안에서 다른 함수에 있는 state를 가져다 쓸 수 없음
    <div className="Mordal">
      <h4>제목</h4>                            
      <p>날짜</p>
      <p>상세내용</p>
    </div>                 // * return 안에는 태그가 병렬적으로 있어선 안 됨. 무조건 하나의 단일 태그 안에 다른 여러 개가 들어있어야 함. 병렬 태그를 쓰고 싶다면 <></>단일 태그 안에 병렬 태그를 넣어야 함.
  )

const Mordal2 = () => {                          // 함수를 정의하는 또다른 방법  (let, const(수정 불가능한 변수) 상관없긴 함)
  return (
    <div></div>
  )
}                         

}                         

export default App;

