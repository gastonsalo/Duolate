import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { db } from "./firebase"
import { collection, getDoc, doc, query, where, getDocs } from "firebase/firestore"


const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({});
  const [cargado, setCargado] = useState(false);
  const { idProducto } = useParams()

  

  useEffect(() => {

    const productosCollection = collection(db, "productos")
    const filtro = query(productosCollection, where("id", "==", idProducto))
    const pedido = getDocs(filtro)

    pedido
      .then(res => setProducto(res.docs[0].data()))
      .catch(() => console.log("Error al cargar los productos"))
      .finally(() => setCargado(true))

  }, [idProducto])


    
        return (
          <div> 
                <div>
                {cargado ? <ItemDetail producto={producto}/> : <div className="mensajeDeCarga">Cargando detalle de un producto...</div>}
                </div>
          </div>
        )  
      
}
export default ItemDetailContainer;