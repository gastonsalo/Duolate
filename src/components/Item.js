import React from 'react'


function Item({info}) {
  return (
    
    <div className='tarjetaProducto'>
        <h2> {info.title}</h2>
        <h4> {info.category}</h4>
        <h3> {info.price}</h3>
    </div>
  )
}

export default Item