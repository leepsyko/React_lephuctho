//======================= xử ký sự kiện trong jsx =================
// 


// react 
// truyền vào hàm:  <button onClick={handleClick}>Click 1</button>  //  đúng
// gọi hàm: <button onClick={handleClick()}>Click 1</button>          // sai

// tên hàm có chữ handle đằng trước, đây là quy tắc đặt tên trong react

import React from 'react'

export default function Events() {

    const handleClick = () => {
        alert("clicked")
    }

    const handleShowMessage = (name) => {
        alert(`hello ${name}`)
    }
    
    // không thể sử dụng onput mà phải thay bằng onchange
    // Sự kiện onChange giống với onPut
    // có thể viết thẳng onchange vào giống kiểu arrow funtion

    const handleChange = (event) => {
        console.log(event.target.value)
    }

    return (
        <div>
            <h1>Events</h1>

            <button onClick={handleClick}>Click 1</button>
            <button onClick={() => {
                alert("clicked 2")
            }}>Click 2</button>

            <button onClick={() => {
                handleShowMessage("jack")
            }}>Show Message</button>

            <br />
            <br />

            <input type="text" onChange={handleChange} />
        </div>


    )
}


// Onchange trong html theo dõi sự thay đổi trong ôn được chọn thay đổi theo giá trị

// OnChange tong react thì giống onpit trong html, theo dõi liên tục theo giời gian thực