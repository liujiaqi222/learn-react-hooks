import { ChangeEvent, useState } from "react"
import Background from "./components/Background";
import Box from './components/Box'

const initialPosition = {
  x: 0,
  y: 0
};


export const UseState = () => {
  const [shape, setShape] = useState({
    color: 'orange',
    position: initialPosition
  })

  function handleColorChange(e: ChangeEvent) {
    setShape({
      ...shape, color: (e.target as HTMLSelectElement).value
    })
  }

  function handleMove(dx: number, dy: number) {
    setShape({
      ...shape, position: {
        x: shape.position.x + dx,
        y: shape.position.y + dy
      }
    })
  }

  return (
    <>
      <select value={shape.color} onChange={handleColorChange}>
        <option value="aliceblue">aliceblue</option>
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
      </select>
      <Background position={initialPosition} />
      <Box color={shape.color} position={shape.position}
        onMove={handleMove}
      >Drag Me!</Box>
    </>
  )
}

