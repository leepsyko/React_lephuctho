// action creator : 1 hàm  return về redux action 
// sử dụng : selectSeat({...})

import { REMOVE_SEAT, SELECT_SEAT } from "../constants/busTicketContants"

export const selectSeat = (seat) =>{
    return {
        type: SELECT_SEAT,
        payload: seat
    }
}


export const removeSeat = (seatId)=>{
    return{
        type:REMOVE_SEAT,
        payload:seatId
    }
}