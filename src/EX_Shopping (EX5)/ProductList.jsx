import React from 'react'
import ProductItem from './ProductItem'

export default function ProductList({products, onGetProduct,onAddToCart}) {

  // Cách viết cũ để truyền lấy giá trị của thẻ con
  const handleGetProduct = (product)=>{
    onGetProduct(product)
  }

  //Cách mới ở dòng onAddToCart

  // const handleAddToCart = (product) =>{
  //   onAddToCart(product)
  // }

  return (
    <div className='row'>
      {
        products.map((product)=>{
          return (
            <div className='col-md-4' key={product.id}>
              <ProductItem product={product} onGetProduct={handleGetProduct} onAddToCart={onAddToCart}/>
            </div>
          )
        })
      }
    </div>
  )
}
