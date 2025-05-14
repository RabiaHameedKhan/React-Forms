import React, { useState } from 'react';

const App = () => { //controlled component

  const [name, setname]= useState("");
  const [fullName, setfullname]= useState("");


  const Event=(event)=>{
    
      console.log(event.target.value)
      setname (event.target.value)
   
  }

  const onSubmit=(event)=>{
    setfullname(name)
    event.preventDefault(); // prevents page reload
  }
  return (
    <div>
      <h1>Welcome to My React Form</h1>
      <h1>Hi {fullName}</h1>
      <form>
        <input placeholder="Enter your name" onChange={Event} value={name}/>
        
        <button type="submit" onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default App;
