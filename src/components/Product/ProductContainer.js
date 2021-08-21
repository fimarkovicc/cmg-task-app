import React, { useState, useEffect } from "react"
import Product from "./Product"

function ProductContainer({ url }) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [err, setErr] = useState(false)

  useEffect(async () => {
    const response = await fetch(url).catch((err) => {
      setErr(true)
    })

    if (response.status >= 200 && response.status <= 299) {
      const data = await response.json()
      setData(data)
      setLoading(false)
    } else {
      console.log(response.status, response.statusText)
      setErr(true)
    }
  }, [])

  if (err) {
    return <h1 className="err">There has been an error loading data</h1>
  }

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
