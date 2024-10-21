"use client"
import React from 'react'
import { useState } from 'react'
export default function Counter() {
const [count , setCount] = useState(0)
const handleAdd =()=>{
    setCount(count +1)
}
const handleDecrease =()=>{
  setCount(count -1)
}

const [visible , setVisible] = useState(null)
const handleVisible = ()=>{
  setVisible((preVisible)=> preVisible==='none' ? 'block' : 'none')
}


  return (
    <>
    
    <div>
      <h1>{count}</h1>
      <button onClick={handleAdd}>add</button>
      <button onClick={handleDecrease}>decrease</button>
    </div>

<div> 
  <h1 style={{display:visible}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt debitis obcaecati cupiditate omnis, nam labore aliquam nobis quo voluptates amet repudiandae sint consequatur ab architecto neque perferendis porro aliquid rerum?</h1>
  <button onClick={handleVisible}>toggle</button>
</div>




    </>
  )
}


