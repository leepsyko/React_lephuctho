const counterReducer = (state = 23, action) => {
    switch (action.type) {
      case "increase":
        return state + 1;
      case "decrease":
        return state - 1;
      case "increaseByAmount":
        return state + action.payload;
  
      default:
        return state;
    }
  };

  export default counterReducer