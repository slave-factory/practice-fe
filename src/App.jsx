import React, { useState } from "react";
import './App.css';


function App() {
  // 하나의 객체에 url, 제목, 설명 세 걔의 정보를 세 개의 딕셔너리로 넣음.
  const 이미지목록 = [
    {url: "https://kisdi-megatrend.com/2024/data/file/allsession/9b54daef37a49b1886e0121f7691d5cd_lvJwFndV_7cfb783d4a6b19afd0406878f5de3efe4cec38be.jpg", 제목: "남우정", 설명: "80 100인 나에게 비쁠을 줌"},
    {url: "https://cse.knu.ac.kr/data/file/sub2_2/thumb-6db859d91a4e6fcd421a1f27612bb49b_Fs96CkOq_2e13f126fc8874588fa77d7d147839d862190758_150x202.png", 제목: "배진학", 설명: "생각보다 성적 주는 게 깐깐하심"},
    {url: "https://cse.knu.ac.kr/data/file/sub2_3/thumb-9ace6fb70e9fd976b38a43b82b28cda8_9CLg1lXm_8b4f4894bd238ef395d0dc54e900ec8abba653d8_150x200.jpg", 제목: "안병준", 설명: "대 밴저민 대 브라이언"},
    {url: "https://cse.knu.ac.kr/data/file/sub2_2/thumb-9ace6fb70e9fd976b38a43b82b28cda8_DzkebjKd_0b6923d9376511883a2ea47c285eb0b2854bb28c_150x202.jpg", 제목: "이성희", 설명: "계절수1열심히들을게요제발에이쁠주세요계절수1열심히들을게요제발에이쁠주세요"}
  ]

  const [선택된이미지, 선택된이미지변경] = useState(0)
  
  return(
    <div className="갤러리전체">
      <h2>이미지 갤러리</h2>

      <div className="썸네일목록">
        {이미지목록.map((e, i)=> (           // .map(e, i) : e는 배열의 객체, i는 인덱스
          <img key={i} src={e.url} alt={e.제목} className="썸네일 " onClick={()=>선택된이미지변경(i)}/>
        ))}
      </div>

      <div className="확대이미지">
        <img src={이미지목록[선택된이미지].url} alt={이미지목록[선택된이미지].제목}/>
        <h3>{이미지목록[선택된이미지].제목}</h3>
        <p>{이미지목록[선택된이미지].설명}</p>
      </div>

    </div>
  )
}

export default App;

