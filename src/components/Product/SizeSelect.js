import React, { useState } from "react"

function SizeSelect({ sizes, currentSize, setCurrentSize }) {
  const handleSizeChange = (e) => {
    const selectedSize = parseInt(e.target.value)
    setCurrentSize(selectedSize)
  }

  return (
    <>
      <select
        value={currentSize}
        onChange={handleSizeChange}
        name="size"
        disabled={!currentSize}
      >
        {sizes.map((item, i) => (
          <option value={item} key={i}>
            {item}
          </option>
        ))}
      </select>
      {!currentSize && <span>No sizes available</span>}
    </>
  )
}

export default SizeSelect
