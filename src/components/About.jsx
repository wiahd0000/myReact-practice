import React, { useState } from "react";

function About(nationality, datebirth,  gender, course){
  const[count, changeCount] = useState(0)
return(
  < div className="about">
    <label>{count}</label> <br />
    <button onClick={()=>changeCount(count + 1)}>Increase</button> <br />
    <button onClick={()=>changeCount(count - 1)}>Decrease</button>

    <p className="pa">I'm a {nationality="Liberian"} I was born on {datebirth="October 25 1994"} my gender is {gender="male" } and Im do {course=18} credits </p>

  </div>
)
}

export default About; 