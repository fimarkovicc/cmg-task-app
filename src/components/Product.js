import React, { useEffect, useState } from "react"

function Product() {
    const fetchProduct = async () => {
        const response = await fetch("http://localhost:5000/products/1")
        if (response.status >= 200 && response.status <= 299) {
          const jsonResponse = await response.json()
          return jsonResponse
        } else {
          console.log('Status: ' + response.status, 'Error text: ' + response.statusText)
        }
      }
    
      const [product, setProduct] = useState({})

      const {id, title, desc, specs, sizes} = product
    
      useEffect(async () => {
        setProduct(await fetchProduct())
      }, [])

  return (
      <div className="product">
            <div className="product__image-display"></div>
            <div className="product__data">
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
      </div>
  )
}

export default Product
