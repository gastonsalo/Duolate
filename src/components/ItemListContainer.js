import ItemList from "./ItemList"
import { useEffect, useState } from "react"
import Categorias from "./Categorias"
import { useParams } from "react-router-dom"
import { db } from "./firebase"
import { collection, getDocs , query , where } from "firebase/firestore"


const ItemListContainer = () => {


    const [productos, setProductos] = useState([])
    const { categoria } = useParams()

    useEffect(() => {

        if(!categoria){

            const productosCollection = collection(db, "productos")
            const pedido = getDocs(productosCollection)
    
            pedido
            .then(res => setProductos(res.docs.map(doc => ({ id: doc.id, ...doc.data() }))))
                .catch(() => console.log("Error al cargar los productos"))

        }else{

            const productosCollection = collection(db, "productos")
            const filtro = query(productosCollection,where("categoria","==",categoria))
            const pedido = getDocs(filtro)

            pedido
            .then(res => setProductos(res.docs.map(doc => ({ id: doc.id, ...doc.data() }))))
                .catch(() => console.log("Error al cargar los productos"))

        }


    }, [categoria])


    
        return (
          <div className='container-fluid row'>
              <div className='col-3'>
              <Categorias/>
              </div>
              <div className='contenedorItemList col-9'>
              <ItemList  productos={productos}/> 
              </div>
          </div>
        )  
      
}

export default ItemListContainer