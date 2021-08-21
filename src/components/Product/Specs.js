import React from "react"

function Specs({ specs }) {
  return specs.length > 0 ? (
    <ul>
      {specs.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  ) : (
    <p>This product has no specs.</p>
  )
}

export default Specs
