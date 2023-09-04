import React from 'react'
import { useSelector } from 'react-redux'
import data from "./data.json"
import SeatList from './SeatList'
import Ticket from './Ticket'


export default function BusTicket() {
   const {totalPrice}=useSelector((state)=>{
    return state.busTicket
  })

  const handleBook =()=>{
    alert(`Total Price: ${totalPrice}`)
  }

  return (
    <div className='container'>
      <h1 className='text-center text-primary'>BusTicket</h1>
      <div className="row">
        <div className="col-md-6" >
          <SeatList seats={data}/>
        </div>
        <div className="col-md-6">
          <Ticket/>
        </div>
      </div>

      <div className='text-center'>
<button className='btn btn-primary ' onClick={handleBook}>Đặt vé</button>
      </div>
    </div>
  )
}
