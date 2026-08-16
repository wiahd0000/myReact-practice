import React from "react";

function Practice(){
  alert("who are you")
  return
  <div>
    <button onClick={Practice}>On-change</button>
    <input type="text" placeholder="click-me" onClick={Practice}/>
  </div>
}

export default Practice;