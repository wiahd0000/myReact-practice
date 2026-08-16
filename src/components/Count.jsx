import React, { useState } from "react";

function Count(month, year){
  const[number, countNumber] = useState(0)
  return(
    <>
    <div>
    <h1>Welcome To Our Count-Down from {month="August" } {year="2026" }to {month="October" } {year="2027"}</h1>
    </div>

    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error veniam aperiam, repudiandae, nostrum quod sed neque nemo praesentium adipisci laudantium autem, molestiae temporibus officia possimus laboriosam qui eius corrupti suscipit?</p>

    <h2>{number}</h2>
   <button onClick={()=> countNumber(number + 1)}>Click</button>
    </>
  )
}
export default Count;