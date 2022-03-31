import React from 'react'
import ItemListContainer from './ItemListContainer'
import {Route, Routes} from "react-router-dom"
import Carrito from './Carrito'
import Contacto from './Contacto'
import Home from './Home'
import ItemDetailContainer from "./ItemDetailContainer"
const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/productos" element={<ItemListContainer/>}/>
      <Route path="/producto/:idProducto" element={<ItemDetailContainer/>}/>
      <Route path="/carrito" element={<Carrito/>}/>
      <Route path="/contacto" element={<Contacto/>}/>
      <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
    </Routes> 
        
)
  
}

export default Main