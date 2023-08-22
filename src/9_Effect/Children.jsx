import React,{useState, useEffect} from 'react'

export default function Children({username}) {
    const [message,setMessage] = useState(`Hello ${username}`)

    useEffect(()=>{
        setMessage(`Hello ${username}`)
    },[username])

  
    useEffect(()=>{
      //  CLEANUP EFFECT

      // ĐÂy là sự kiện trước khi componetn được huỷ bỏ
      return () =>{
        console.log("component unmoungting")
      }
    },[])



  return (
    <div>
        <h1>Children</h1>
        <p>Message: {message}</p>
    </div>
  )
}
