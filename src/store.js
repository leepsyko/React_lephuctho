import { configureStore } from "@reduxjs/toolkit";
import busTicketReducer from "./redux/reducer/busTicketReducer";
import counterReducer from "./redux/reducer/counterReducer";
import todosReducer from "./redux/reducer/todosReducer";

// luôn luôn return "sao chép ra mảng mới hoặc object mới"




// const initState = {
//   selectedSeats: [],
//   totalPrice: 0,
// };

// const busTicketReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "selectSeat": {
//       const { isSelected, ...seat } = action.payload;
//       if (isSelected) {
//         const selectedSeats = [...state.selectedSeats, seat];
//         const totalPrice = state.totalPrice + seat.price;
//         return { ...state, selectedSeats, totalPrice };
//       }

//       const selectedSeats = state.selectedSeats.filter(
//         (item) => item.id !== seat.id
//       );
//       const totalPrice = state.totalPrice - seat.price;
//       return { ...state, selectedSeats,totalPrice };
//     }
//     case "removeSeat": {
//       const seatId = action.payload;
//       const totalPrice = selectedSeats.reduce((result,item)=>{return result + item.price},0)
//       const selectedSeats = state.selectedSeats.filter(
//         (item) => item.id !== seatId
//       );
//       return { ...state, selectedSeats,totalPrice };
//     }

//     default:
//       return state;
//   }
// };

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    busTicket: busTicketReducer,
  },
});

// ================================DEMO==================
console.log("Store:", store.getState());

// // hàm adds 1 sự thay đổi trong store. bất cứ khi nào state trong store thay đổi thì sẽ hiện thị sau
// store.subscribe(() => {
//   console.log("State sau khi thay đổi:", store.getState());
// });

// const action = { type: "increase" };
// //store.dispatch để truyền action vào reducer
// store.dispatch(action);
// console.log("State sau khi increase:", store.getState());

// store.dispatch({ type: "decrease" });
// console.log(store.getState())

// store.dispatch({ type: "increaseByAmount", payload: 10 });

//

//============== END DEMO ============================================
export default store;
