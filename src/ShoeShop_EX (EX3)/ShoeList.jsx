import React from 'react'
import ShoeItem from './ShoeItem'

export default function ShoeList({products}) {
  return (
    <div className='row'>
      {products.map((product)=>{
        return <div className='col-md-4' key={product.id}>
          <ShoeItem product={product}/>
        </div>
      })}
    </div>
  )
}
