import React, { useState } from "react"
import Title from "./Title"
import Description from "./Description"
import SizeSelect from "./SizeSelect"
import BuyButton from "./BuyButton"
import Specs from "./Specs"
import ImageDisplay from "./ImageDisplay"

function Product(props) {
  const { id, title, desc, specs, sizes, images } = props.data

  const [currentSize, setCurrentSize] = useState(sizes[0])

  return (
    <div className="product">
      <div className="product__image-display">
        <ImageDisplay images={images} currentsize={currentSize} />
      </div>
      <div className="product__data">
        <Title title={title} />
        <Description desc={desc} />
        <SizeSelect
          sizes={sizes}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
        />
        <BuyButton item={[title, currentSize]} />
        <Specs specs={specs} />
      </div>
    </div>
  )
}

export default Product
