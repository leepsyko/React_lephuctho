import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


export default function Redux() {
    const { counter, todos } = useSelector((state) => {
        return state
    })



    // const todos = useSelector((state) => {
    //     return state.todos
    // })

    const dispatch = useDispatch()

    const handleIncrease = () => {
        dispatch({ type: "increase" })
    }


    const handleDecrease = () => {
        dispatch({ type: "decrease" })
    }


    const handleIncreaseByAmount = () => {
        const num = +prompt("input number")

        dispatch({ type: "increaseByAmount", payload: num })
    }


    const handleAddTodo = () => {
        const todo = {
            id: Math.floor(Math.random() * 100),
            title: prompt("Input todo list"),
            isCompleted: false,
        }
        dispatch({ type: "addTodo", payload: todo })
    }

    const handleDeleteTodo = (id) => {

        dispatch({ type: "deleteTodo", payload: id })
    }

    const handleCompleteTodo = (todoId) => {
        dispatch({type:"completeTodo", payload: todoId})
    }

    return (
        <div>
            <h1>Redux</h1>
            <hr />
            <p>Counter: {counter}</p>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
            <button onClick={handleIncreaseByAmount}>Increase By Amount</button>

            <hr />

            <ul>
                {/* todo: {id:1, title: "Learn React" , isCompleted: true/flase} */}
                {todos.map((item) => {
                    return <li key={item.id} >
                        <span onClick={()=>{handleCompleteTodo(item.id)}} style={{textDecoration:item.isCompleted ? "line-through":"none"}}>  {item.title}</span>
                        <button onClick={() => {
                            handleDeleteTodo(item.id)
                        }}>X</button>

                    </li>
                })}
                <button onClick={() => {
                    handleAddTodo()
                }}>Add Todo</button>
            </ul>
        </div>
    )
}
