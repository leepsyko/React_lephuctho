// Những hàm có chữ use đằng trước gọi là Hooks
// Hooks: useState return thành 2 phần tử 
import React, { useState } from 'react'

// Cách sử dụng đệ quy bằng react

export default function State() {
    let [count, setCount] = useState(1)
    // giá trị của count sẽ không thể thay đổi như bình thường mà phải thông qua hàm setCount

    let [message, setMessage] = useState("")



    // console.log(state)
    // let count = 1
    const handleIncrease = () => {
        // count += 1
        // console.log(count)

        setCount(count + 1)

    }


    const handleSetmesssage = () => {
        const msg = prompt("nhập vào message")
        setMessage(msg)
    }
    // state là array
    const [colors, setColor] = useState(["red", "green", "blue"])

    const hanleAddColor = () => {
        const color = prompt("Nhập mầu theo ý thích có sẵn trong danh sách")


        setColor([...colors, color])
    }

    const handleRmoveColor = () => {
        const color = prompt("Nhập vào màu muốn xoá")
        const newColors = colors.filter((item) => item !== color)

        setColor(newColors)
    }


    // State of Object
    const [user, setUser] = useState({ username: "", email: "" })

    const handleChangeUsername = () => {
        const username = prompt("Nhập vào tên Username muốn đổi")
        setUser({ ...user, username })
    }
    const handleChangeEmail = () => {
        const useremail = prompt("Nhập vào tên Email muốn đổi")
        setUser({ ...user, email: useremail })
    }


    // State()
    return (
        <div>
            <h1>State</h1>
            <p>Count: {count}</p>
            <button onClick={handleIncrease}> Increase</button>
            <button onClick={() => {
                setCount(count - 1)
            }}> Increase</button>


            <hr />
            <p>Message: {message}</p>
            <button onClick={handleSetmesssage}>Set Message</button>


            <hr />
            <p>Color: {colors.join(", ")}</p>
            <button onClick={hanleAddColor}>Add Color</button>
            <button onClick={handleRmoveColor}>Remove Color</button>


            <hr />

            <p>User: {user.username} - Email: {user.email}</p>
            <button onClick={handleChangeUsername}>Change Username</button>
            <button onClick={handleChangeEmail}>Change Useremail</button>
        </div>
    )
}
