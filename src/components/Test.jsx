import React, { useState } from "react";


function Test(props){
  const [adds, setAdds] = useState(0)
  return(
   <>
    <div>
      <h1>{adds}</h1>
      <button onClick={()=>setAdds(adds + 1)} >Just-Click</button>
    </div>



  <img src={props.image} alt="pics" />
   </>
  )
}

export default Test;