import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeSeat } from '../redux/actions/busTicketActions'

export default function Ticket() {

  const {selectedSeats} = useSelector((state) => {
    return state.busTicket
  })

  const dispatch = useDispatch() 

  const handleRemove =(seatId)=>{
    // dispatch({type:"removeSeat",payload: seatId})

    dispatch(removeSeat(seatId))

  }



  return (
    <div>
      <h3>Danh sasch ddax chon</h3>
      {
        selectedSeats.map((item)=>{
          return (
            <div className="mb-2">
              <span className='me-3'>
                {item.name} - {item.price}$
              </span>
              <button className='btn btn-danger' onClick={()=>handleRemove(item.id)}>X</button>
            </div>
          )
        })
      }
    </div>
  )
}
