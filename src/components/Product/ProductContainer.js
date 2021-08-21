import React, { useState, useEffect } from "react"
import Product from "./Product"

function ProductContainer() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(async () => {
    const url = "http://localhost:5000/products/1"
    const response = await fetch(url)
    if (response.status >= 200 && response.status <= 299) {
      const data = await response.json()
      setData(data)
      setLoading(false)
    } else {
      console.log(response.status, response.statusText)
    }
  }, [])

  return (
    <>
      {loading || !data ? (
        <div className="loading">Loading data...</div>
      ) : (
        <Product data={data} />
      )}
    </>
  )
}

export default ProductContainer