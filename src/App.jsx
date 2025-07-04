import React from "react";

function Businesscard(props) {         /*함수형 컴포넌트*/
    return(
        <div>
            <h3>나만의 명함 만들기</h3>
            <p>이름 : {props.name}</p>
            <p>직업 : {props.job}</p>
            <p>연락처 : {props.number}</p>
        </div>
    );

}


export default Home;

