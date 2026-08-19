import React from "react";
import About from "./components/About";
import Constant from "./components/Constant";
import Count from "./components/count";
import Test from "./components/test";
import Forms from "./components/Forms";

import img1 from "./images/pc-1.jpg"

import "./App.css"


function App({name, age, location, contact}){
  return(
   < >
   
    <div>
<h2>My name is: {name="Mr. Wiah"} I'm {age="Two"} year of age and my location is {location="South Afria"} my contact is {contact="0555340996"}</h2>

    </div>
    <Forms />

   <About  image={img1}/>

   <Constant />

   <Count />
   <Test image = {img1}/>



   </>
  )
}

export default App;
