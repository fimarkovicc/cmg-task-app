import React from "react"
import ProductContainer from "./Product/ProductContainer"
import ErrorBoundary from "./Product/ErrorBoundary"

function App() {
  const url = "http://localhost:5000/products/1"
  return (
    <ErrorBoundary>
      <ProductContainer url={url} />
    </ErrorBoundary>
  )
}

export default App
