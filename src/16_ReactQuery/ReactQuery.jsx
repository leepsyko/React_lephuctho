import axios from 'axios'
import React, { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'



// const queryClient = useQueryClient()


//ham call api get post 
const getPosts = async (userId) => {
    try {
        const response = await axios.get(
            "https://64a6ad14096b3f0fcc8042cd.mockapi.io/posts",
            {
                params: {
                    userId: userId || undefined,
                }
            }
        )
        return response.data
    } catch (error) {

        // format cua axios
        throw error.response.data
    }

}

// hafm call api delete post
const deletePost = async (postId)=>{
    try {
        await axios.delete(
            `https://64a6ad14096b3f0fcc8042cd.mockapi.io/posts/${postId}`
        )
    } catch (error) {
        throw error.response.data
    }
}

export default function ReactQuery() {


    const [userId, setUserId] = useState("")

    const queryClient = useQueryClient()

    const { data = [], isLoading, error } = useQuery({
        queryKey: ["post", userId],
        queryFn: () => getPosts(userId)
    })



    const {mutate: handleDeletePost}=useMutation({mutationFn:(postId)=>deletePost(postId),
    onSuccess: ()=>{
        queryClient.invalidateQueries({queryKey:["post"]})
    }})



    if (isLoading) {
        return <h1>Loading ...</h1>
    }

    if (error) {
        return <h1>Not Found</h1>
    }


    const handleChangeUserId = (evt) => {
        const { value } = evt.target
        setUserId(value)

    }


    return (
        <div>
            <h1>ReactQuery</h1>

            <select value={userId} onChange={handleChangeUserId}>

                <option value={1} >User 1 </option>
                <option value={2} >User 2</option>
                <option value={3} >User 3</option>
                <option value={4} >User 4</option>
                <option value={5} >User 5</option>
                <option value={6} >User 6</option>
                <option value={7} >User 7</option>
                <option value={8} >User 8</option>
                <option value={9} >User 9</option>
                <option value={10} >User 10 </option>
            </select>

            <ul>
                {data.map(item => {
                    return <li key={item.id}>
                        <span className='me-3'>{item.title}</span>
                        <button onClick={()=>handleDeletePost(item.id)}>X</button>
                        </li>
                })}
            </ul>
        </div>
    )
}




// import React, { useState } from 'react'
// import axios from 'axios'
// import { useQuery ,useMutation ,useQueryClient } from '@tanstack/react-query'

// //Delete posts
// const deletePost = async (postId)=>{
//     try {
//         await axios.delete(
//             https://64a6ad14096b3f0fcc8042cd.mockapi.io/posts/${postId}
//         )
//     } catch (error) {
//         throw error.response.data
        
//     }
// }

// const getPosts = async (userId)=>{
//     try {
//         const response =  await axios.get(
//             "https://64a6ad14096b3f0fcc8042cd.mockapi.io/posts",
//             {
//                 params:{
//                     userId:userId || undefined
//                 }
//             }

        
//         )
//         return response.data
        
//     } catch (error) {
//         throw error.response.data
//     }
// }


// export default function ReactQuery() {


//     const [userId , setUserId] = useState("")

//     const queryClient = useQueryClient()

   


//     const {data = [], isLoading , error} = useQuery({queryKey:['posts' ,userId],queryFn:()=>getPosts(userId)})

//    const  {mutate:handleDeletePost} = useMutation({mutationFn:(postId) => deletePost(postId) , onSuccess:()=>{
//     //vô hiệu hóa queryKey cúa posts gọi lại API getPosts
//     queryClient.invalidateQueries({queryKey:["posts"]})
//    }})



//     if(isLoading){
//         return <h2>Loading...</h2>
//     }

//     if(error){
//         return <h1>Error</h1>
//     }
//     const handleChangeUserId = (event)=>{
//         const {value}=event.target
//     setUserId(value)
//       }

//   return (
//     <div>
//         <h1>React Query</h1>

//     <select value={userId} onChange={handleChangeUserId}>
//     <option value={1}>User 1</option>
//     <option value={2}>User 2</option>
//     <option value={3}>User 3</option>
//     <option value={4}>User 4</option>
//     <option value={5}>User 5</option>
//     <option value={6}>User 6</option>
//     <option value={7}>User 7</option>
//     <option value={8}>User 8</option>
//     <option value={9}>User 9</option>
//     <option value={10}>User 10</option>
//   </select>

//         <ul>
//             {data.map(item=>{
//                 return <li key={item.id}>
//                     <span className='me-3'>{item.title}</span>
//                     <button onClick={()=>handleDeletePost(item.id)}>X</button>
//                 </li>
//             })}
//         </ul>
//     </div>
//   )
// }