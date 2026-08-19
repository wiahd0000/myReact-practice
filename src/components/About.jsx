import React, { useState } from "react";

function About(nationality, datebirth,  gender, course){
  const[count, changeCount] = useState(0)
  const[text, setText]= useState("")
  const[textarea, setTextarea] = useState("")
  const[number, addNumber] = useState("")
  const[form, setForm] = useState()

  //the preventdefualt is a inbuilt function that stop your broswer default behave.
  
  function handleSumit(e){
    (e).preventDefault();
  }

return(
  < div className="about">

<label>{number}</label> 

<input type="tel" placeholder="enter your cell number" value={number} onChange={(e)=>addNumber(e.target.value)} /> <br />

    <label>{count}</label> <br />
    <button onClick={()=>changeCount(count + 1)}>Increase</button> <br />
    <button onClick={()=>changeCount(count - 1)}>Decrease</button>

    <p className="pa">I'm a {nationality="Liberian"} I was born on {datebirth="October 25 1994"} my gender is {gender="male" } and Im do {course=18} credits </p>
    <h1>{text}</h1>
 <input type="text" value={text} onChange={(event)=>setText(event.target.value)}/>
<p>{textarea}</p>
 <textarea value={textarea} onChange={(event)=>setTextarea(event.target.value)} placeholder="Enter your text
 ">Enter your message</textarea>



  </div>
)
}

export default About; 