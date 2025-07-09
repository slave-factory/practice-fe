import React, { useState } from "react";
import './App.css';


function App() {

  const [Mordal열림, Mordal열림설정] = useState(false);

  function Mordal열기() {
    Mordal열림설정(true);
  };

  function Mordal닫기() {
    Mordal열림설정(false);
  };
  
  return(

    <div>
      <button onClick={Mordal열기}>모달 열기</button>
      {Mordal열림 && <Modal컴포넌트 닫기함수={Mordal닫기} />}    {/* 어쨌든 Mordal을 열었으면 닫는 과정도 필요한데, 그 함수를 메인 컴포넌트에서 만들고 그걸 Mordal 컴포넌트로 넘겨주는 것. Mordal에서 'Mordal닫기'가 실행되면 'Mordal열림 &&'을 충족하지 못해 Mordal이 자동으로 닫히게 됨. */}
    </div>
  )
}

export default App;


function Modal컴포넌트({닫기함수}) {

  function 바깥영역클릭(e) {
    if (e.target.className === "Mordal배경") {
      닫기함수();
    }
  };

  return (
    <div className="Mordal배경" onClick={바깥영역클릭}>    {/* 요게 Mordal 테두리 */}
      <div className="Mordal내용">
        <h2>히히모달창</h2>
        <p>이따 수1 싸강 들어야 하는데..</p>
        <button onClick={닫기함수}>닫기</button>
      </div>
    </div>
  );
}
