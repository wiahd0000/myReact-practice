import React from "react";
import About from "./components/About";
import Constant from "./components/Constant";
import Count from "./components/count";
import Test from "./components/test";
import Practice from "./components/practice";
import "./App.css"

function App({name, age, location, contact}){
  return(
   < >
   
    <div>
<h2>My name is: {name="Mr. Wiah"} I'm {age="Two"} year of age and my location is {location="South Afria"} my contact is {contact="0555340996"}</h2>

    </div>

   <About />

   <Constant />

   <Count />

  
<Test/>

<Practice/>

   </>
  )
}

export default App;
