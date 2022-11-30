// 자주사용하는 이벤트 확인
// 객체와 배열, 객체들을 가진 배열에 대한 내용
// map, filter > 자바스크립트의 메소드(함수)
// 테이터 기능 > 자바스크립트의 메소드에서 확인

import { useEffect, useState } from "react";

const EventBox = () => {
  const [changeName, setChangeName] = useState("");
  // state의 changeneme 받아옴
  const [clickName, setClickName] = useState(""); // 위에 변수값 받아옴
  // 변수 name을 받아옴 
  const [varName, setVarName] = useState(""); // 아래꺼 받아옴
  let name = "aa"; // 화면에 출력되지 않고 많이 바뀌는 값들에 사용
  // 이 값을 화면에 출력하고 싶다면 - state에 담아서 화면이 바뀌도록 출력
  const funcName =(n)=>{ name = n; console.log(name); }; 
  useEffect(()=>{console.log("실행");},[name])

    return (  
        <div>
            <h3>이벤트박스</h3>
            <h4>state로 작성한 이름: {changeName}, 변수이름 : {name}</h4>
            <input type="text" onChange={(e)=>{ setChangeName(e.target.value) }} />
            <button onClick={()=>{ setClickName(changeName) }}>state 값을 저장</button>
            <input type="text" onChange={(e)=>{ funcName(e.target.value) }} />
            <button onClick={()=>{ setVarName(name) }}>변수 값을 가져와서 저장 </button>
            <h4>state 값을 가져와서 저장 : {clickName}, 변수 값을 가져와서 저장 : {varName} </h4>

        </div>
    );
}

export default EventBox;
