import { useEffect, useState } from "react"
import  ItemDetail  from "./ItemDetail"
import { useParams } from "react-router-dom"
import { db } from "./firebase" 
import { collection, doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () => {

  const [producto, setProduct] = useState({})

  const { idProducto } = useParams()

  useEffect(() => {
    const productsCollection = collection(db, "productos")
    const pedido = getDoc(doc(productsCollection, idProducto))

    pedido
    .then(res => setProduct({ ...res.data(), id: res.id }))

      .catch((error) => {
        console.log(error)
      })


  }, [idProducto])


    
        return (
          <div> 
                <div>
                <ItemDetail key={producto.id} producto={producto}/>
                </div>
          </div>
        )  
      
}
export default ItemDetailContainer;