import React from 'react'

export default function ProductItem({ product, onGetProduct,onAddToCart }) {
  return (
    <div className='card'>
      <img src={product.img} alt={product.name} className="card-img" width="100%" />
      <div className='card-body'>
        <h3 className='card-title'>{product.name} </h3>
        <button onClick={()=>{onGetProduct(product)}} className='btn btn-success'>Xem chi tiết</button>
        <button className='btn btn-danger'onClick={()=>{onAddToCart(product)}} > Thêm giỏ hàng</button>
      </div>
    </div>
  )
}


