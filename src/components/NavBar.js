import React from 'react'
import { Link } from "react-router-dom"
import CartWidget from './CartWidget'


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow p-3 mb-5 ">
      <div className="container-fluid me-3">
        <Link to="/" className="navbar-brand p-0 "><img className="logo" src="/images/logoDuolate.png" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        </button>

        <ul className="navbar-nav gap-3  ">
          <li className="nav-item">
            <Link to="/" className="links nav-link " aria-current="page" href="#">Home</Link>
          </li>

          <li className="nav-item dropdown">
            <a className="links nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Nuestros Productos
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li > <Link to="/productos" className='dropdown-item' aria-current="page">
                Todos los productos</Link></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>

          <li className="nav-item">
            <Link to="/contacto" className="links nav-link">Contacto</Link>
          </li>

        </ul>
      </div>
      <CartWidget />
    </nav>
  )
}

export default NavBar 