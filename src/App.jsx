import React, { useState } from "react";
import './App.css';


function 버튼({온클릭함수, 좋아요개수}) {
  return (
    <h4><button onClick={온클릭함수}>좋아요 버튼</button> {좋아요개수} </h4>
  )

}


function App() {

  let [좋아요개수, 좋아요개수변경함수] = useState(0)

  function 온클릭함수() {
    좋아요개수변경함수(좋아요개수+1)
  }

  return (
    <버튼 온클릭함수={온클릭함수} 좋아요개수={좋아요개수}/>
  )
}

export default App;




 



