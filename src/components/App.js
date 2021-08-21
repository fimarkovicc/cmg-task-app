import React from "react"
import ProductContainer from "./Product/ProductContainer"

function App() {
  const url = "http://localhost:5000/products/1"
  return <ProductContainer url={url} />
}

export default App
