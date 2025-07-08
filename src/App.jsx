import React, { useState } from "react";
import './App.css';


function App() {

  const [name, Name변경] = useState('');
  const [intro, Intro변경] = useState('');
  const [submitted, setSubmitted] = useState(false);       // 입력값 유효성 검사를 위해 사용할 제줄 상태 표시 state.

  return(
    <div>
      <h2>자기소개 폼</h2>
      <입력컴포넌트 props함수=
      {(input이름, input소개) =>        //props 함수 여기서 직접 만드는 중..
        {             
          if (input이름 === '' || input소개 === '') {
            alert('모든 항목을 입력하세요.');                        // <입력값 유효성 검사> : 입력값을 확인하고, 하나라도 빈 값이면 알림(alert)를 띄우고 더 이상 실행하지 않음.
            return;
          }
          Name변경(input이름);       // 입력컴포넌트로부터 받은 input이름, input소개 값을 app컴포넌트에서 새로 지정한 state에 새롭게 넣어줌.   
                                    // 이렇게 번거로운 짓을 하는 이유 : 자식 컴포넌트의 state는 부모 컴포넌트가 직접 알 수도, 접근할 수도 없음. 그래서 자식이 값을 부모에게 넘겨줘야 하고, 부모는 그걸 받아서 따로 자기 state를 만들어 거기에 저장해야 함.
          Intro변경(input소개);
          setSubmitted(true);          // 제출 상태 표시 state를 제출 완료 상태로 표시
        }}
      />

                                      {/* <조건부 랜더링> */}
      {submitted && (                  // : summited가 true일 때만 && 뒤의 JSX 내용을 표시함.
        <div>
          <h3>제출된 내용</h3>
          <p>이름: {name}</p>
          <p>자기소개: {intro}</p>
        </div>
      )}

    </div>
  )
}

export default App;



function 입력컴포넌트({props함수}) {

  const [input이름, input이름변경] = useState('')    // 초기값은 비어 있음. 
  const [input소개, input소개변경] = useState('')

  function 화면에표시(ee) {
    ee.preventDefault();     // 새로고침을 막아줌. 없애면 제출 버튼을 누를 때마다 화면이 새로고침되고, 입력값도 사라짐.
    props함수(input이름, input소개);   // 부모 컴포넌트(App)에서 props로 넘겨받은 함수를 실행함. 여기에 input이름, input소개 값을 보내게 됨.
  }

  return (
    <form onSubmit={화면에표시}>      {/* form : 이름, 자기소개 같은 입력 요소(input)들을 묶어주는 태그 */}
                                    {/* onSubmit : 폼이 '제출(submit)'되었을 때 실행되는 이벤트 핸들링 */}
      <div>
        <input type="text" placeholder="이름 입력" value={input이름} onChange={(e) => input이름변경(e.target.value)}/> <br/>  
                                                                                {/* value={state} : input 입력창에 보여줄 값을 state에서 가져오기 -> input 창에 '뭐라고 적혀 있을지'를 보여줌 */}
                                                                                {/* onChange : 입력창에서 글자가 바뀔 때마다(-> 사용자가 글자를 입력할 때마다) 실행되는 함수. */}                                                
                                                                                {/* e 이벤트객체 : 해당 onChange 이벤트가 발생핬을 때, e에 그 상황에 대한 정보(targer, target.value, type, preventDefault() 등)를 담아 함수로 보냄. e.target.value처럼 나중에 그 정보를 끌어올 수 있음.   *e.target.value : 사용자가 입력한 실제 값   *참고로 이건 화살표 함수 지정 방식. */}      
                                                                                {/* onChange={(e) => setInputName(e.target.value)} : 사용자가 글자를 입력했을 때 state를 바꾸기 -> input 창에 입력한 내용을 'state에 저장'함                                                                                                                                  *둘은 항상 짝꿍. 하나만 쓰면 제대로 작동 안 함. */}                                                                                                        
        <input type="text" placeholder="소개 입력" value={input소개} onChange={(e) => input소개변경(e.target.value)}/>
        <br/><button type="submit">제출</button>  {/* 제출(submit) 형식의 버튼. 버튼을 누르면 form이 제출이라고 인색하게 됨. */}
      </div>
    </form>
  )
}






 



