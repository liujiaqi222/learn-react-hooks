import { useState, useMemo } from "react"
export const UseMemoBasic = () => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  // useMemo will only recompute the memoized value when one of the deps has changed.
  // 和vue的computed类似
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number]) // 只有当number发生变化后，才会执行slowFunction
  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  }
  return (
    <div>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark((pre) => !pre)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber} </div>
    </div>
  )
}

function slowFunction(num: number) {
  console.log("calling slowFunction")
  for (let i = 0; i < 1000000000; i++) {
    // empty
  }
  return num * 2
}
