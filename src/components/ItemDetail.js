import React from 'react'
import ItemCount from './ItemCount'
import { useContext} from 'react'
import { contexto } from '../context/CartContext'

const ItemDetail = ({ producto }) => {



  const  {carrito, agregarAlCarrito, quitarProducto}  = useContext(contexto)

  const onAdd = (qnt) => {
    agregarAlCarrito(producto, qnt)
 
  }


  return (



<div className="cardDetalle container row ">
  <div className='text-center col-4 me-2'>
  <img src={producto.image} className="card-img-top imgDetalle"/>
  <ItemCount onAdd={onAdd} />
  <button onClick={()=>quitarProducto(producto.id)}>borrar </button>
  </div>

  <div className="card-body col-8">
    <h4 className="card-title">{producto.nombre}</h4>
    <p className="card-text">{producto.descripcion}.</p>
    
  </div>
</div>
  )
}

export default ItemDetail