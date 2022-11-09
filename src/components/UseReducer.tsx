import { useReducer, useState } from "react"
import type { SyntheticEvent } from "react"

// #region reducer-basic
function reducer(state: { count: number }, action: "increment" | "decrement") {
  if (action === "increment") return { count: state.count + 1 }
  return { count: state.count - 1 }
}
const UseReducerBasic = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  function decrement() {
    dispatch("decrement")
  }
  function increment() {
    dispatch("increment")
  }
  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  )
}

// #endregion

// #region reducer example
type ToDo = { id: number; name: string; complete: boolean }
type Action =
  | { type: "addTodo"; payload: { name: string } }
  | { type: "toggleTodo" | "delete"; payload: { id: number } }

function newTodo(name: string): ToDo {
  return { id: Date.now(), name, complete: false }
}

function toggleTodo(todos: ToDo[], todoId: number): ToDo[] {
  return todos.map((todo) => {
    if (todo.id === todoId) {
      // 创建了一个新的对象
      return { ...todo, complete: !todo.complete }
    }
    return todo
  })
}

function exampleReducer(state: ToDo[], action: Action) {
  switch (action.type) {
    case "addTodo":
      return [...state, newTodo(action.payload.name)]
    case "toggleTodo":
      return toggleTodo(state, action.payload.id)
    default:
      return state.filter((todo) => todo.id !== action.payload.id)
  }
}

const UseReducerExample = () => {
  const [todos, dispatch] = useReducer(exampleReducer, [])
  const [name, setName] = useState("")
  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()
    dispatch({ type: "addTodo", payload: { name: name } })
    setName("")
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </form>
      {todos.map((todo) => (
        <div key={todo.id} style={{ display: "flex", gap: "4px" }}>
          <input
            type="checkbox"
            id={`${todo.id}`}
            onChange={() => dispatch({ type: "toggleTodo", payload: { id: todo.id } })}
          />
          <label htmlFor={`${todo.id}`} style={{ color: todo.complete ? "green" : "red" }}>
            {todo.name}
          </label>
          <button onClick={() => dispatch({ type: "delete", payload: { id: todo.id } })}>delete</button>
        </div>
      ))}
    </>
  )
}

// #endregion

export { UseReducerBasic, UseReducerExample }
