//import { useEffect,useState } from "react";
import React from 'react'

export const hook = () => {
  return (
    <div>hook</div>
  )
}

function Hook(){
    const [data,setData]=useState(0)
    const [count,setCount]=useState(10)
    useEffect(()=>{
        console.warn("data is calling")
    },[data])
    useEffect(()=>{
        console.warn("count is calling")
    },[count])
    return(
        <div>
            <h1>[data]</h1>
            <h1>[count]</h1>
            <button onClick={()=>setData(data+1)}>data update</button>
            <button onClick={()=>setCount(count+1)}>count update</button>
        </div>
    )
}
//export default Hook;