import { REMOVE_SEAT, SELECT_SEAT } from "../constants/busTicketContants";

const initState = {
  selectedSeats: [],
  totalPrice: 0,
};

const busTicketReducer = (state = initState, action) => {
  switch (action.type) {
    case SELECT_SEAT: {
      const { isSelected, ...seat } = action.payload;
      console.log(seat)
      if (isSelected) {
        const selectedSeats = [...state.selectedSeats, seat];
        const totalPrice = state.totalPrice + seat.price;
        console.log(selectedSeats)
        return { ...state, selectedSeats, totalPrice };
      }

      const selectedSeats = state.selectedSeats.filter(
        (item) => item.id !== seat.id
      );
      const totalPrice = state.totalPrice - seat.price;
      return { ...state, selectedSeats, totalPrice };
    }
    case REMOVE_SEAT: {
      const seatId = action.payload;
      const selectedSeats = state.selectedSeats.filter(
        (item) => item.id !== seatId
      );
      const totalPrice = selectedSeats.reduce((result, item) => {
        return result + item.price;
      }, 0);
      return { ...state, selectedSeats, totalPrice };
    }

    default:
      return state;
  }
};

export default busTicketReducer;
