import React, {useState} from "react";

function Test(){
  
  const[add, countAdd] = useState(0)
  return(
    <div>
      <label >Welcome</label> <br /> <br />
      <label>{add}</label> <br /> <br />
      <button onClick={()=>countAdd(add + 1)}>+1</button> <br /> <br />
      <button onClick={()=>countAdd(add - 1)}>-1</button> <br /> <br />
      <h5>this is my first react project</h5>
    </div>
  )
}



export default Test;