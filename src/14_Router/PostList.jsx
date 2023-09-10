// import { set } from 'immer/dist/internal'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getPosts } from '../redux/slices/postSlice'

export default function PostList() {

  const dispatch = useDispatch()

  const { posts } = useSelector((state) => state.post)
  const navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams()


  const totalPages = Math.ceil(100 / 10)


  const handleChangePage = (page) => {
    searchParams.set("page", page)
    setSearchParams(searchParams)
  }

  const handleChangeUserId = (evt) => {
    const { value } = evt.target

    searchParams.set("userId", value)
    searchParams.set("page", 1)

    setSearchParams(searchParams)

  }

  //công thức tạo 1 mảng 1,2,3,..,n
  const pages = Array.from({ length: Math.ceil(100 / 10) }, (_, index) => index + 1)

  useEffect(() => {
    const page = searchParams.get("page")
    const userId = searchParams.get("userId")
    dispatch(getPosts({ page,userId }))
  }, [searchParams])

  return (
    <div>

      <h1>Post list</h1>

      <select onChange={handleChangeUserId}>

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
        {posts.map((post) => {
          return <li key={post.id}>
            <span>{post.title}</span>

            <button onClick={() => navigate(`${post.id}`)}>Detail</button>
          </li>
        })}
      </ul>
      {/* 3 thông số khi làm phân trang: total, page, limit (số lượng phần tử 1 page) */}
      <div className='d-flex justify-content-center'>
        {pages.map((page) => {
          return (
            <button key={page} onClick={() => handleChangePage(page)}>{page}</button>
          )
        })}
      </div>
    </div>
  )
}
