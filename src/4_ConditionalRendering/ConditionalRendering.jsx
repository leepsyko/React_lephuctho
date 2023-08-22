// Hiển thị theo điều kiện

// trong js: null undefined và false sẽ không hiện thị ra gai diện 


import React from 'react'

function UserGreeting() {
    let unreadMessage = 5

    return (
        <>
            <div>Welcome Back</div>
            {unreadMessage > 0 && (
                <p>You have {unreadMessage} unread message</p>
            )}
        </>
    )

}

function GuestGreeting() {
    return <div>Please Login</div>
}

export default function ConditionalRendering() {
    let isLoggedIn = true
    let shouldDisplay = true
    let unreadMessage = 5

    if (!shouldDisplay) {
        return null
    }





    // let greeting 

    // if (isLoggedIn) {
    //     greeting = <div>Welcome Back</div>
    // } else{
    //     greeting = <div>Please Login</div>
    // }




    // toán tử bậc 3 " ? : "

    //  TOÁN TỬ BẬC 3 ? : 
    // VD:  {isLoggedIn ? <div>Welcome back</div> : <div>Please Login</div>}

    // quy tắc không được viết 2 thẻ đồng cấp html cũng áp dúng cho html lồng trong js

    return (
        <div>
            <h1>ConditionalRendering</h1>
            {isLoggedIn ? (<UserGreeting />) : <GuestGreeting />}
        </div>
    )
}
