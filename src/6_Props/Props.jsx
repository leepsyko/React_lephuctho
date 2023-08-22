// @ts-nocheck
import React from 'react'
import Card from './Card'
import Products from './Product'
import UserProfile from './UserProfile'

export default function Props() {
const product = {
    id: 1,
    name: "Iphone 13 Promax",
    price: 300000000,
}

const handleGetProduct = (product) =>{
    alert(product.name)
}

    return (
        <div>
            <h1>Props</h1>

            <UserProfile name="Alice" age={18} isAdmin/>
            <UserProfile name="Albus Percival Wulfric Brian Dumbledore" age={116 } isAdmin={false}/>
            <UserProfile/>
            
            <hr />

            <Products product={product} onGetProduct={handleGetProduct}/>

            <Card heading="Greeting">
                <UserProfile name='Tí' age={25} isAdmin/>
                {/* <h1>Hello Card</h1>
                <h3>OK</h3> */}
            </Card>
            <Card heading="User Profile">
                <h1>HELLO</h1>
            </Card>
        </div>
    )
}
