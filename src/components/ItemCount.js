import React from 'react'
import { useState } from 'react'


const ItemCount = (props) => {

    let [estado, setEstado] = useState(props.initial)

    const sumarItem = () => {
        if (estado < props.stock) {
            setEstado(estado + 1)
        }
    }

    const restarItem = () => {
        if ((estado <= props.stock) && (estado > 0)) {
            setEstado(estado - 1)
        }
    }

    const agregarAlCarrito = () =>{
        alert("Has agregado "+estado+" productos al carrito")
    }

    return (
        < div>
            <p>Cantidad de Items: {estado}</p>
            <button onClick={sumarItem}>+</button>
            <button onClick={restarItem}>-</button>
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount