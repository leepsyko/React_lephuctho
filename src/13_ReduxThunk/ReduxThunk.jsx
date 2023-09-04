import axios, { Axios } from 'axios'
import React,{useEffect} from 'react'


export default function ReduxThunk() {
  const getPosts = async ()=>{
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      )
    } catch (error) {
      
    }


  }

  




  return (
    <div>ReduxThunk</div>
  )
}
