import React, { useState } from "react";
//onclick even: most apply on button
function Constant(){
  const[user,  setUser] = useState("")
  return(
    <div>
      <button onClick={Constant}>Wiah-Click</button>
    </div>
  )
}

export default Constant;