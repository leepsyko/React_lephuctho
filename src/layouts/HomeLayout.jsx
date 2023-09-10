import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function HomeLayout() {
    return (
        <>
            <div className='bg-dark'>
                <nav className="nav justify-content-center  ">
        
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/shop">Shop</Link>
                    <Link className="nav-link" to="/user">User</Link>
                    <Link className="nav-link" to="/post">Post</Link>
                    <Link className="nav-link" to="/styles">style</Link>

                </nav>

            </div>
                <Outlet/>
        </>
    )
}
