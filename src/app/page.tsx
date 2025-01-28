'use client'
import React from 'react'

export default function Home() {
  // these are the three states we need
  // - dragging: is the user currently dragging the box?
  // - position: the current position of the box
  // - offset: the distance between the mouse and the top-left corner of the box when you first click dragging
  const [dragging, setDragging] = React.useState(false)
  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  // offset is used to make the mouse position relative to the box when we strat dragging
  const [offset, setOffset] = React.useState({ x: 0, y: 0 })

  return (
    // we need to add mouse event listeners to the parent element to track dragging
    <main
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        height: '100vh',
      }}
      onMouseMove={(event) => {
        if (!dragging) return
        // this is actually where we set the position of the box
        setPosition({
          x: event.clientX - offset.x,
          y: event.clientY - offset.y,
        })
      }}
      onMouseUp={() => {
        setDragging(false)
      }}
    >
      {/* the box itself doesn't set the movement cause then we would not be able to drag across the screen
the box allows it's left and top possition to be managed by state, but it itself only sets the toggle of dragging and where the offset is */}
      <div
        style={{
          // positon needs to be set for left and top to work
          position: 'relative',
          outline: 'solid',
          padding: 20,
          left: position.x,
          top: position.y,
        }}
        onMouseDown={(event) => {
          setOffset({
            x: event.clientX - position.x,
            y: event.clientY - position.y,
          })
          setDragging(true)
        }}
      >
        box
      </div>
    </main>
  )
}
