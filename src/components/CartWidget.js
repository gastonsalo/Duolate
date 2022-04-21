import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { contexto } from '../context/CartContext'

const CartWidget = () => {

  const { cantidadTotal } = useContext(contexto);

  return (
    <div>
      <Link to="/carrito"><span className=" logoCarrito links me-5 material-icons">shopping_cart </span></Link>
      <div className='cantidadCarrito'>
        {cantidadTotal}
      </div>
      
    </div>

  )
}

export default CartWidget