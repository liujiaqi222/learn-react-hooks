import { ReactNode, useState, PointerEvent } from "react"

const Box = ({ children, color, position, onMove }: { children: ReactNode, color: string, position: { x: number, y: number }, onMove: (dx: number, dy: number) => void }) => {
  const [lastCoordinates, setLastCoordinates] = useState<null | { x: number, y: number }>(null);

  function handlePointerDown(e: PointerEvent) {
    (e.target as HTMLDivElement).setPointerCapture(e.pointerId);
    setLastCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  }
  function handlePointerMove(e: PointerEvent) {
    if (lastCoordinates) {
      setLastCoordinates({
        x: e.clientX,
        y: e.clientY,
      });
      const dx = e.clientX - lastCoordinates.x;
      const dy = e.clientY - lastCoordinates.y;
      onMove(dx, dy);
    }
  }
  function handlePointerUp() {
    setLastCoordinates(null);
  }

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        width: 100,
        height: 100,
        cursor: 'grab',
        backgroundColor: color,
        position: 'absolute',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: `translate(
          ${position.x}px,
          ${position.y}px
        )`,
      }}
    >{children}</div>
  )
}

export default Box