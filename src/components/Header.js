import React from 'react'
import NavBar from './NavBar'
import CartWidget from './CartWidget'
const Header = () => {
  return (
    <header>
        <h1>Duolate</h1>
        <NavBar/>
        <CartWidget/>
        </header>
  )
}

export default Header