import React from 'react'

function ProductImages({ product }) {
  return (
              <div className="img_item">
                <div className="big_img">
                  <img id='big_img' src={product.images[0]} alt={product.title} />
    
                </div>
    
                <div className="sm_img">
                  {product.images.map((image, index) => (
                    // <div className="img_div_sm">
                    <img key={index} src={image} alt={product.title} onClick={() => document.getElementById("big_img").src = image} />
                    // </div>
                  ))}
                </div>
              </div>
  )
}

export default ProductImages
