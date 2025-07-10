import React, { useState } from "react";
import './App.css';


function App() {

  const 날씨데이터 = [
    {도시: "서울", 온도: 30, 상태: "개습함"},
    {도시: "대구", 온도: 31, 상태: "ㅎㅎ오늘은 좀 시원하당"},
    {도시: "제주", 온도: 30, 상태: "재봉캠 ㅎㅇㅌ"},
  ];

  return(
    <div>
      <h2>오늘의 날씨</h2>
      <날씨카드 날씨데이터={날씨데이터}/>
    </div>
  )
}

export default App;


function 날씨카드({날씨데이터}) {

  return(
    <div>

      {날씨데이터.map((e, i)=>(
      <div key={i} className="날씨카드">
        <h4>{e.도시}</h4>
        <p>온도 : {e.온도}°C</p>
        <p>날씨 : {e.상태}</p>
      </div>
      ))}

    </div>
  )
}



