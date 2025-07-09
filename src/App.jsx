import React, { useState } from "react";
import './App.css';


function App() {
  const [정답숫자, 정답숫자변경] = useState(() => Math.floor(Math.random() * 100) + 1)
  const 최대시도 = 10
  const [시도횟수, 시도횟수변경] = useState(0) 
  const [입력값, 입력값변경] = useState()
  const [결과메세지, 결과메세지변경] = useState("")


  function 제출처리(e) {   
    e.preventDefault();            // 본래 브라우저는 사용자가 submit 버튼을 누르면 페이지를 새로고침하는데, 이를 막기 위함
    const 숫자 = parseInt(입력값);   // input으로 입력된  문자열 값을 정수값으로 바꿔줌.  * input에서 type="number"이어도 input으로 받는 건 문자열 취급.
                                   // 이 게임에선 정수만 취급하므로 Number()보단 parseInt()가 적절.

    if (isNaN(숫자)) {             // <입력 유효성 검사> 숫자가 아닌 값이 입력되었을 때 경고 표시 팝업
                                  // isNaN() : 해당 값이 숫자인지 아닌지 판별. 숫자가 아니면 True.
      alert("숫자를 입력하세요") 
      return;                    
    }

    // * 입력 유효성 검사, 시도 횟수 변경, 정답 판단, 메세지 출력 등의 매커니즘 순서를 잘 짜야 함!

    시도횟수변경(시도횟수 + 1);         // 시도횟수변경(시도횟수 + 1)는 state 변경 요청을 하는 것이고 이게 '시도횟수'state에 즉시 반영되지는 X. 
                                     // 여기서 시도횟수+1을 해서 10을 만든다 해도 이 뒤 if 조건판별에서 '시도횟수'를 부르면 애는 아직 9임.
    const 다음시도횟수 = 시도횟수 + 1;  // <해결책> 임시 변수를 만들어 그 값을 넣어주면 됨!

    if (숫자 === 정답숫자) {
      결과메세지변경("정답입니다!");
    } 
    else if (다음시도횟수 === 최대시도) {            // '숫자 < or > 정답숫자' 검사를 하고 그 뒤에 그 안에서 횟수검사를 하는 것보다    이렇게 횟수검사를 먼저 해 주게 되면 불핅요하게 결과메세지변경을 두 번이나 할 필요가 X.
      결과메세지변경(`실패! 정답은 ${정답숫자}였습니다.`);
    } 
    else if (숫자 < 정답숫자) {
      결과메세지변경("숫자가 너무 낮아요!");
    } 
    else {
      결과메세지변경("숫자가 너무 높아요!");
    }

    입력값변경("");            // 입력값 초기화를 해 주지 않으면 다음 단계에서 input 창에 이전 숫자가 남아있게 됨.
  }

  function 다시시작() {
    정답숫자변경(Math.floor(Math.random() * 100) + 1);
    시도횟수변경(0);
    입력값변경("");
    결과메세지변경("");
  }


  return(
    <div>
      <h1>숫자 맞추기 게임</h1>
      <p>1부터 100 사이의 숫자 맞추기!</p>
      <p>남은 시도: {최대시도 - 시도횟수}</p>
      <form onSubmit={제출처리}>
        <input type="number" value={입력값} onChange={(e) => 입력값변경(e.target.value)} 
        disabled={결과메세지.startsWith("정답") || 결과메세지.startsWith("실패")}    // 결과메세지가 정답 또는 실패로 시작하면 더이상 사용자가 입력을 못 하게 막는 용도. 게임이 끝났는데도 숫자를 입력하는 상황을 막기 위함.
        />
        <button type="submit" disabled={결과메세지.startsWith("정답") || 결과메세지.startsWith("실패")}>제출</button>
      </form>
      <p>{결과메세지}</p>
      
      {(결과메세지.startsWith("정답") || 결과메세지.startsWith("실패")) && (       // 그냥 button을 쓰면 버튼이 항상 나타나있게 되고, 이렇게 조건부 랜더링으로 감싸 게임이 끝났을 때만 보이게 할 수 있음.
        <button onClick={다시시작}>다시시작</button>                
      )}
    </div>
  )
}

export default App;

