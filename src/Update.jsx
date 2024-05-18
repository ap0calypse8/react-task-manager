import React, { useState } from 'react'

export const Update = () => {
 const [age,setAge]=useState(15);
 const [input,setInput]=useState("");
//  function changeAge(){
//     setAge(18);
//  }
  return (
    <>  
        <div>Update</div>
        <button onClick={()=>{setAge(age-1)}} >changeage</button>
        <input onChange={(event)=>{console.log(event.target.value)}} type="text" />
        <div>{age}</div>
    </>
    
  )
}
