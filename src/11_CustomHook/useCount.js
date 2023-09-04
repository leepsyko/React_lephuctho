import React, { useState } from 'react'

export default function useCount() {

    const [count,setcount] = useState(0)
    
    const handleIncrease = () =>{
        setcount(count + 1)
    }
    const handleDecrease = () =>{
        setcount(count - 1)
    }




  return {count, handleDecrease,handleIncrease}
}
