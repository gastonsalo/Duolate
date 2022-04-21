import { createContext } from "react";
import { useState } from "react";



export const contexto = createContext();

const MiProvider = ({children}) => {
    const [cantidadTotal, setCantidadTotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [carrito, setCarrito] = useState([]);


const clearCart=()=>{
    setCarrito([])
} 

const agregarAlCarrito = (producto, cantidad) => {

    const copiaCarrito = [...carrito]
    const totalParcial= producto.precio*cantidad
        setTotal(total+totalParcial)
        setCantidadTotal(cantidad+cantidadTotal)

    if(!isInCart(producto.id)){
        setCarrito([...copiaCarrito, {...producto, cantidad}])
        
    }else{
        const index = carrito.findIndex((prod)=>producto.id===prod.id)
        copiaCarrito[index].cantidad+=cantidad

    }
    console.log(carrito)
}

const quitarProducto=(id)=>{
    const copiaCarrito = [...carrito]
    const index = carrito.findIndex((prod)=>id===prod.id)
    if(copiaCarrito.length>0){
        setCantidadTotal(cantidadTotal-copiaCarrito[index].cantidad)
        setTotal(total-copiaCarrito[index].precio*copiaCarrito[index].cantidad)
        copiaCarrito.splice(index,1)
        setCarrito(copiaCarrito)
    }
    
}




const isInCart = (id)=>{
    return carrito.some((producto)=>producto.id===id)
}


    return (
        <contexto.Provider value={ {carrito,cantidadTotal,total,clearCart,agregarAlCarrito,quitarProducto }}>
           {children}
        </contexto.Provider>
    );
}

export default MiProvider;

