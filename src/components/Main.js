import React from 'react'
import ItemCount from './ItemCount'

const Main = (greeting) => {
  if(greeting.edad > 18){
    return (
      <main>
          <h2>Hola {greeting.nombre}! Bienvenido a nuestro carrito de compras</h2>
          <ItemCount stock={8} initial={1} />
      </main>
    )  
  }else if (greeting.edad<18){
    return (
      <main>
          <h2>Hola {greeting.nombre}! Debes ser mayor de 18 años para poder comprar</h2>
      </main>
    )  
  }
  
}

export default Main