
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { useContext } from 'react'
import { contexto } from '../context/CartContext'




function Item({ producto }) { 

  const  {agregarAlCarrito}  = useContext(contexto)
  
  const onAdd = (qnt) => {
    agregarAlCarrito(producto, qnt)
  }

  return (
    <div className="card shadow p-3 mb-5 text-center">
      <Link to={`/producto/${producto.id}`}><img className='imagenes p-2' src={producto.image} /></Link>
      <div className="card-body row">
        <p className="card-title">{producto.nombre}</p>
      </div>
      <div className=' pe-4 pb-2'>
      <h4 className="card-text text-start mt-2 mb-3">${producto.precio}</h4>
      </div>
      <ItemCount onAdd={onAdd} />
    </div>
  )
}

export default Item