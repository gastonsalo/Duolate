import React from 'react'
import { useState} from 'react'

const inicial = 0
const stock = 10
const ItemCount = ({onAdd}) => {

    let [estado, setEstado] = useState(inicial)

    const sumarItem = () => {
        if (estado < stock) {
            setEstado(estado + 1)
        }
    }

    const restarItem = () => {
        if ((estado <= stock) && (estado > 0)) {
            setEstado(estado - 1)
        }
    }

    return (
        <div>
            <div className='agregarCard mt-3'>
                    <button onClick={sumarItem} className='sumarRestar'>+</button>
                    
                    <p className=' p-0 m-0'>{estado}</p>
                    
                    <button onClick={restarItem} className='sumarRestar'>-</button>
            </div>
            <div className=' pb-2 mt-2'>
                <button className="botonAgregar text-center  btn" onClick={()=>onAdd(estado)} > Agregar al carrito</button>
            </div>
        </div>
            )
}

            export default ItemCount



