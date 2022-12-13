import { useState, useEffect } from "react"

export const UseEffectBasic1 = () => {
  const [resourceType, setResourceType] = useState("posts")
  const [count, setCount] = useState(0)
  const [items, setItems] = useState<{ userId: number; id: number; title: string; body: string }[]>([])
  // 当resourceType变化的时候，会重新执行这个hook,但count变化的时候，不会重新执行
  // 因为设置的依赖是resourceType
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}/`)
      .then((response) => response.json())
      .then((json) => setItems(json))
  }, [resourceType])
  // useEffect第二个参数用来设置依赖，如果依赖是[]，就相当于是onMount，只会在第一次加载的时候执行

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>

      {items.map((item) => {
        return <pre key={item.id}>{JSON.stringify(item)}</pre>
      })}

      <hr />
      <button onClick={() => setCount((pre) => pre + 1)}>{count}</button>
    </>
  )
}

export const UseEffectBasic2 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize)
    console.log("监听")
    return () => {
      // 每次useEffect执行后，都会执行 return 里面的函数
      window.removeEventListener("resize", handleResize)
      console.log("stop监听")
    }
  }, [])

  return (
    <>
      <div>{windowWidth}</div>
    </>
  )
}
