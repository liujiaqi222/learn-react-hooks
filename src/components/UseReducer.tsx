import { useReducer } from "react"

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
const UseReducerExample = () => {
  return <></>
}

// #endregion

export { UseReducerBasic }
