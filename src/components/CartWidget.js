import React from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  return (
    <Link to="/carrito"><span className=" logoCarrito me-5 material-icons">shopping_cart</span></Link>
  )
}

export default CartWidget