

import React, { useState } from 'react'
import ProductDetail from './ProductDetail'
import ProductList from './ProductList'
import data from "./data.json"
import Cart from './Cart'

export default function Shopping() {
  // State quản lý giá trị sản phẩm đang được chọn để xem chi tiết
  const [selectedProduct, setSelectedProduct] = useState(null)
  // State quản lý trạng thái ẩn hiện của modal giỏ hàng
  const [isOpen, setIsOpen] = useState(false)
  // state Thêm sản phẩn vào giỏ hàng
  const [carts, setCarts] = useState([])


  const handleGetProduct = (product) => {
    console.log(product)
    setSelectedProduct(product)
  }

  const handleCloseCart = () => {
    setIsOpen(false)
  }


  const handleAddToCart = (product) => {
    //Kiểm tra sản phẩm có trong giả hàng hay chưa

    const found = carts.find((item) => item.id === product.id)

    if (found) {
      const newCart = carts.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 }
        }

        return item
      })

      setCarts(newCart)

      // carts[found].quantity++

      // setCarts(carts)

    } else {
      // product.quantity = 1
      setCarts([...carts, { ...product, quantity: 1 }])
    }
  }

  const handleDeleteProductFromCart = (productid) =>{
    const newCart = carts.filter(item => item.id !== productid)

    setCarts(newCart)
  }


  // // phần làm dấu cộng trừ về nhà làm
  // const handlePlusProductsInCart = (productid,quantity) =>{
  //   const newCart = carts.map((item) =>{
  //     if (item.id === productid) {
  //       item.quantity + quantity
  //     }

  //     return item
  //   } )


  // }





// total không cẩn tạo State, vì được tính trên cart state
// khi cart state chạy thì component sẽ được render lại
  const totalProduct = carts.reduce((result,item)=>{
    return result + item.quantity
  },0)



  // console.log(DATA)
  return (
    <div className='container'>
      <h1 className="text-center text-primary">Phone Shop</h1>
      <div className='d-flex justify-content-end mb-3'>
        <button className="btn btn-danger" onClick={() => setIsOpen(true)}>Giỏ Hàng ({totalProduct})</button>
      </div>

      <ProductList products={data} onGetProduct={handleGetProduct} onAddToCart={handleAddToCart} />

      <ProductDetail product={selectedProduct} />

      {isOpen && <Cart onCloseCart={handleCloseCart} carts={carts} onDeleteProductFromCart={handleDeleteProductFromCart} />}
    </div>
  )
}
