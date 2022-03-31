import React from 'react'
import { Link } from "react-router-dom"

const Categorias = ({info}) => {
  return (
    <div className='navBarCategorias row gap-2 '>
        <Link to="/productos/frutas" className='btnCategorias'>Pulpas y Frutas</Link>
        <Link to="/productos/envases" className='btnCategorias'>Envases</Link>
        <Link to="/productos/polvos " className='btnCategorias'>Polvos</Link>
        <Link to="/productos/chips" className='btnCategorias'>Chips</Link>
        <Link to="/productos/coberturas" className='btnCategorias'>Coberturas y Baños</Link>
        <Link to="/productos/azucares" className='btnCategorias'>Azúcares y Edulcorantes</Link>
        <Link to="/productos/jaleas" className='btnCategorias'>Jaleas y Salsas</Link>
        <Link to="/productos/pastas" className='btnCategorias'>Pastas</Link>
        <Link to="/productos/estabilizantes" className='btnCategorias'>Estabilizantes</Link>
        <Link to="/productos/confites" className='btnCategorias'>Golosinas y Confites</Link>
        <Link to="/productos/dulceDeLeche" className='btnCategorias'>Dulces de Leche</Link>
        <Link to="/productos/elementos" className='btnCategorias'>Elementos</Link>
        <Link to="/productos/cafe" className='btnCategorias'>Café</Link>
        <Link to="/productos/ProdHeladerias" className='btnCategorias'>Productos para Heladerias</Link>
        <Link to="/productos/esencias" className='btnCategorias'>Esencias</Link>
    </div>
  )
}

export default Categorias