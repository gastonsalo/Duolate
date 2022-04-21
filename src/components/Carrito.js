import React from 'react'
import { useContext, useState } from 'react'
import { contexto } from '../context/CartContext'
import CompraRealizada from './CompraRealizada'
import Pagar from './Pagar'

const Carrito = () => {
  const { carrito, quitarProducto, total } = useContext(contexto)

  const [datos, setDatos] = useState(null)
  const [confirmacion, setConfirmacion] = useState(false)

  const cargaDeDatos = (e) => {
    e.preventDefault()
    setConfirmacion(true)


    setDatos({ nombre: `${e.target[0].value} ${e.target[1].value}`, telefono: e.target[2].value, mail: e.target[3].value })
  }
  return (
    <div className='container-fluid row'>
      {!confirmacion ?
      
      <div >
      {carrito.map((prod) => {return (
        
        
          <div className='carritoDetalle'>
          <img src={prod.image} className="card-img-top imgDetalleCarrito col-3" />
          <h6 className="card-title col-3">{prod.nombre}</h6>
          <p className='col-3'>cantidad:{prod.cantidad}</p>
          <button className='botonBorrar col-1' onClick={() => quitarProducto(prod.id)}>X </button>

          <p className='col-1'>${prod.precio}</p>
          
          </div>
        


      )})}
      <h4 className='suma text-center mt-2 mb-5 mx-auto'>Total a pagar: ${total}</h4>
      { carrito.length>0 && <Pagar cargaDeDatos={cargaDeDatos} /> }
      
          </div>
          
      :

    <div className='cartelCompraRealizada mb-5 mx-auto shadow col-6'>
      
      <CompraRealizada {...datos}/>
    </div>
}
    </div>)

}

export default Carrito