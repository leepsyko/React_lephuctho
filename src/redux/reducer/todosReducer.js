const todosReducer = (state = [], action) => {
    switch (action.type) {
      case "addTodo":
        return (state = [...state, action.payload]);
      case "deleteTodo":
        return state.filter((item) => item.id !== action.payload);
      case "completeTodo":
        const todoid = action.payload;
        return state.map((item) => {
          if (item.id === todoid) {
            return { ...item, isCompleted: !item.isCompleted };
          }
        });
      default:
        return state;
    }
  };
  


  export default todosReducer