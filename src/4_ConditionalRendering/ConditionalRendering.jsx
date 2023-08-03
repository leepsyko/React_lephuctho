// Hiển thị theo điều kiện




import React from 'react'

export default function ConditionalRendering() {
    let isLoggedIn = true

    let greeting 


    if (isLoggedIn) {
        greeting = <div>Welcome Back</div>
    } else{
        greeting = <div>Please Login</div>
    }

    return (
        <div>
            <h1>ConditionalRendering</h1>
            {greeting}
        </div>
    )
}
