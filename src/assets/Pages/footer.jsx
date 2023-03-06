import React, { useState } from "react"

export default function Footer() {
  const [count, setCount] = useState(0)

  return (
    <div className="wrapperfooter">
      <p>This is the footer, neat</p>
    </div>
  )
}