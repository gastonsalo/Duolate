import React from 'react'
import { useContext } from 'react'
import { contexto } from '../context/CartContext'

const Carrito = (producto) => {
  const { carrito, agregarAlCarrito, quitarProducto, total } = useContext(contexto)

  return (
    <div className='container row'>
      {carrito.map((prod) => {return (

        <div className="carritoDetalle">

          <img src={prod.image} className="card-img-top imgDetalle" />
          <h4 className="card-title">{prod.nombre}</h4>
          <p >cantidad:{prod.cantidad}</p>
          <button className='botonBorrar ' onClick={() => quitarProducto(prod.id)}>X </button>

          <p >${prod.precio}</p>

        </div>


      )}
    )}
    <p className='suma text-center '>${total}</p>
    </div>)

}

export default Carrito