import React from 'react'
import { Link } from 'react-router-dom'


function Item({ info }) {
  return (
    <div className="card shadow p-3 mb-5">
      <Link to={`/producto/${info.id}`}><img className='imagenes p-2' src={info.image} /></Link>
      <div className="card-body row">
        <p className="card-title">{info.nombre}</p>
      </div>
      <div className='text-end pe-4 pb-2'>
      <h4 className="card-text text-end mt-3">${info.precio}</h4>
      </div>
      <div className='text-end pe-4 pb-2'>
        <p className="botonAgregar btn text-end"> Agregar al carrito</p>
      </div>
      
    </div>
  )
}

export default Item