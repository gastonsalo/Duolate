import React from 'react'

const ItemDetail = ({producto}) => {
  return (
    <div >
    <h5 >{producto.nombre}</h5>
    <img src={producto.image} className="imagenes "/>
    <p>{producto.descripcion}.</p>
  </div>
  )
}

export default ItemDetail