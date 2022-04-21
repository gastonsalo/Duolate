import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import CartWidget from './CartWidget'
import {contexto} from '../context/CartContext'


const NavBar = () => {
const {carrito} = useContext(contexto);



  return (

<nav className="navbar navbar-expand-lg container-fluid shadow p-3 mb-5 ">
  <div className=" container-fluid">
  <Link to="/"><img className="logo" src="/images/logoDuolate.png" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="material-icons">view_headline</span>
    </button>
    <div className=" collapse navbar-collapse" id="navbarSupportedContent">
      <div className=" linksCaja navbar-nav mx-auto ">
        
        <Link to="/" className="links nav-link px-3" aria-current="page" >Home</Link>
        
        <Link to="/productos" className='links nav-link px-3' aria-current="page">Nuestros productos</Link>
        
        <Link to="/contacto" className="links nav-link px-3">Contacto</Link>
      </div>
    </div>
    <div className='m-0 '>
        <CartWidget />
      </div>
  </div>
</nav>





  )
}

export default NavBar 