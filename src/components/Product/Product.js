import React, { useState } from "react"
import Title from "./Title"
import Description from "./Description"
import SizeSelect from "./SizeSelect"

function Product(props) {
  const { id, title, desc, specs, sizes, images } = props.data

  const [currentSize, setCurrentSize] = useState(sizes[0])

  return (
    <div className="product">
      <div className="product__image-display"></div>
      <div className="product__data">
        <Title title={title} />
        <Description desc={desc} />
        <SizeSelect
          sizes={sizes}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
        />
      </div>
    </div>
  )
}

export default Product
