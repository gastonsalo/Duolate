import React, {useEffect, useState} from 'react'
import ItemList from './ItemList';



const ItemListContainer = (greeting) => {
    const [info, setInfo] = useState([]);
    const [cargado, setCargado] = useState([]);

    useEffect(()=>{
        setCargado(false);
        setTimeout(()=>{
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((json)=>setInfo(json))
            setCargado(true);
        }, 3000);
    }, []);


    
        return (
          <div className='contenedorGeneral'>
              <h2>Hola {greeting.nombre}! Bienvenido a nuestro carrito de compras</h2>  
              <div className='contenedorItemList'>
              {cargado ? <ItemList info={info}/> : <div className="mensajeDeCarga">Estamos cargando todos los productos...</div>}
              </div>
          </div>
        )  
      
}

export default ItemListContainer