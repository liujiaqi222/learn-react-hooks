import { useState, useEffect, useRef } from "react"

// 如果想要统计渲染次数，使用useEffect+useState会导致state一直在变化导致循环渲染
export const UseRefBasicError = () => {
  const [name, setName] = useState("")
  const [count, setCount] = useState(0)
  useEffect(() => {
    setCount((prev) => prev + 1)
  })
  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>my name is {name}</div>
      <div>rendered {count} times</div>
    </>
  )
}

// ref 绑定的数据变化时不会导致组件reUpdated
export const UseRefBasic1 = () => {
  const [name, setName] = useState("")
  const renderCount = useRef(1) // renderCount的初始值是{current:1}
  useEffect(() => {
    renderCount.current += 1
  })
  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>my name is {name}</div>
      <div>rendered {renderCount.current} times</div>
      <hr />
    </>
  )
}

// 操作dom
export const UseRefBasic2 = () => {
  const [name, setName] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
<<<<<<< HEAD
  function foucs() {
=======
  function focus() {
>>>>>>> master
    inputRef.current?.focus()
  }
  return (
    <div>
      <input ref={inputRef} type="text" onChange={(e) => setName(e.target.value)} />
      <div>my name is {name}</div>
<<<<<<< HEAD
      <button onClick={foucs}>Foucs</button>
=======
      <button onClick={focus}>Focus</button>
>>>>>>> master
      <hr />
    </div>
  )
}

// 获取state previous value
export const UseRefBasic3 = () => {
  const [name, setName] = useState("")
  const prevName = useRef("")
  useEffect(() => {
    prevName.current = name
  }, [name])
  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>my name is {name}</div>
      <div>previous name is {prevName.current}</div>
    </>
  )
}
