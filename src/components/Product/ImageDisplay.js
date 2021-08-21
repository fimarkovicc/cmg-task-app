import React, { useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import uuid from "react-uuid"
import noimagefallback from './../../../assets/images/placeholder-no-image.png'

function ImageDisplay(props) {
  const { currentsize, images } = props

  if (!currentsize || images.filter((item) => item.size == currentsize)[0].images.length == 0) {
    return (
      <img src={noimagefallback} />
    )
  }
  
  return (
      
    <Carousel key={uuid()}>
        
      {images
        .filter((item) => item.size == currentsize)
        .map((item) =>
          item.images.map((image, i) => (
            <div key={i}>
              <img src={image} />
            </div>
          ))
        )}
    </Carousel>
  )
}

export default ImageDisplay
