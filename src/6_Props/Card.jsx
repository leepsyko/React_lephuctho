import React from 'react'

// cách viết children trong jsx
//  Kĩ thuật children
// trong kĩ thuật children, sẽ có 1 props tên children được thêm vô



export default function Card({heading,children}) {
    console.log(children)
  return (
    <div className='card mt-4'>
        <div className='card-header'>{heading}</div>
        <div className="card-body">{children}</div>
        {/* <h1>Đây là component Card</h1> */}
        {/* {children} */}
    </div>
  )
}
