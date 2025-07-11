import React, { useState } from "react";
import './App.css';


function App() {

  const [일기리스트, 일기리스트변경] = useState([])             // * 초기값을 빈 배열([])로 설정해줘야 함!
  const [제목입력값, 제목입력값변경] = useState(""); 
  const [내용입력값, 내용입력값변경] = useState(""); 
  const [날짜입력값, 날짜입력값변경] = useState("");           // * const [입력값, 입력값변경] = useState({ 제목: "", 내용: "", 날짜: "" }); 이렇게 입력값을 하나로 묶어 관리하는 방법도 고민해보면 좋을 듯.

  const [선택된일기, 선택된일기변경] = useState(); 
  

  function 일기추가(e) {

    e.preventDefault();       // 새로고침 방지. onSubmit으로 실행하는 함수라면 무조건 필요한 부분!

    if (제목입력값.trim() === ""){        
      alert("제목을 입력하세요");      
      return;  
    }  
    if (내용입력값.trim() === ""){        
      alert("내용을 입력하세요");      
      return;  
    }
    if (날짜입력값.trim() === ""){        
      alert("날짜를 입력하세요");      
      return;  
    }

    일기리스트변경([...일기리스트, { id: Date.now(), 제목: 제목입력값, 내용: 내용입력값, 날짜: 날짜입력값 } ]);

    제목입력값변경("")
    내용입력값변경("")
    날짜입력값변경("")
  }

  function 일기출력(id) {
    선택된일기변경(일기리스트.find((e) => e.id === id));        // 배열.find((e)=> ) : 배열의 객체들을 하나씩 돌면서 이를 e로 받고, => 의 조건에 맞는 객체를 찾아낸 뒤 이를 반환.
  }

  function 일기삭제(id) {
    일기리스트변경(일기리스트.filter((ee) => ee.id !== id));
  }


  return(
    <div>


      <일기카드 일기리스트={일기리스트} 일기출력={일기출력} 일기삭제={일기삭제} />

      {선택된일기 && (                          // 선택된일기 가 true로 평가될 때(안에 값이 있을 때)만 () 안의 코드를 실행   
        <div className="일기출력칸">         
          <h4>제목 : {선택된일기.제목}</h4>
          <p>날짜 : {선택된일기.날짜}</p>
          <p>내용 : {선택된일기.내용}</p>
          <button onClick={()=>(선택된일기변경(null))}>닫기</button>
        </div>
      )}

      <form className="일기입력칸" onSubmit={일기추가}>
        <h3>새 일기 쓰기</h3>
        <input type="text" value={제목입력값} onChange={(e) => 제목입력값변경(e.target.value)} placeholder="제목을 입력하세요"></input> <br/>
        <input type="text" value={내용입력값} onChange={(e) => 내용입력값변경(e.target.value)} placeholder="내용을 입력하세요"></input> <br/>
        <input type="date" value={날짜입력값} onChange={(e) => 날짜입력값변경(e.target.value)}/>날짜를 입력하세요     {/* type="date"는 self 태그여야 함! */}  <br/>
        <button type="submit">일기 추가</button>
      </form>

    </div>
  )
}

export default App;



function 일기카드({일기리스트, 일기출력, 일기삭제})  {
  return (
    <div>
      {일기리스트.map((e, i) => (
        <div key={e.id} className="일기카드박스">             {/* React에서 .map()으로 배열 반복 렌더링할 땐 key가 꼭 필요! */}
          <h4>{e.제목}</h4>
          <button onClick={() => 일기출력(e.id)}>일기 펼치기</button>
          <button onClick={() => 일기삭제(e.id)}>일기 삭제</button>
        </div>
      ))}
    </div>
  )
}

