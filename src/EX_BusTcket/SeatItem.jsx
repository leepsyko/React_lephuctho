import React, { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { selectSeat } from '../redux/actions/busTicketActions'



export default function SeatItem({seat,isSelected}) {

  const dispatch = useDispatch()


  // State quản lý trạng thái có được chọn hay không
  // const [isSelected, setIsSelected] = useState(false)

  
  
  const handleSelected = () =>{
    // set là hàm chạy bất đồng bộ nên không lấy giá trị được giá trị mới
    
    // setIsSelected(!isSelected)
    
    // dispatch({type: "selectSeat",payload: {...seat, isSelected:!isSelected}})
    console.log(isSelected)
    
    // dispatch(selectSeat({...seat, isSelected:!isSelected}))
    dispatch({type: "selectSeat",payload:{...seat, isSelected:!isSelected}})
}






  let classes = "btn m-2 "

  if(seat.isBooked) {
    classes += "btn-danger"
  }else if (isSelected) {
    classes += "btn-success"
  } else {
    classes += "btn-secondary"
  }

// vd cho bài 15 styles thư viện classnames

// cn("btn m-2 btn-secondary",{"btn-danger": seat.isBooked,"btn-success":isSelected})





  return (
   <button className={classes} disabled={seat.isBooked} onClick={handleSelected}>
ghế {seat.name}
   </button>
  )
}
