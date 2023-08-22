import React from 'react'
import Header from './Header'
import Banner from './Banner'
import PhoneItem from './PhoneItem'
import PhoneList from './PhoneList'
import Promotion from './Promotion'

export default function Shop() {
  return (
    <div className='bg-dark'>
      <Header />
      <Banner />
      <PhoneList />
      <Promotion />
    </div>
  )
}
