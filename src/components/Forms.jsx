import React, {useState} from "react";


function Forms(){
  const[name, setName] = useState("");
const[form, setForm] = useState("");
  function handleSumit(e){
    e.preventDefault();
    setForm(name);
    setName("");
  }
  return(
    <>
    <div>
      <form onSubmit={handleSumit}>
        <h1>{form}</h1>
        <input type="text" placeholder="Please enter your text" value={name} onChange={(e)=>setName(e.target.value)}/> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  )
}

export default Forms;