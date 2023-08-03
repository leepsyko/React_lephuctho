import React from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

export default function Home() {
    return (
        <>
            <Header />
            <div className="d-flex">
                <div className="w-25">
                    <Sidebar />
                </div>
                <div className="w-75">
                    <Content />
                </div>
            </div>

            <Footer/>
        </>
    )
}
