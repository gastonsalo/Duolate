import { useEffect, useContext, useState } from 'react'
import { addDoc, serverTimestamp } from 'firebase/firestore'
import { fbCollectionOrders } from './firebase'
import { contexto } from '../context/CartContext'


const CompraRealizada = ({nombre, telefono, mail}) => {
	const { carrito, total, quitarProducto } = useContext(contexto)
	const [codigo, setCodigo] = useState(null)
	const order = {buyer: {nombre, telefono, mail}, productosComprados: [], fecha: '', total: 0}
	
	order.productosComprados = carrito
	order.total = total
	order.fecha = serverTimestamp()

	useEffect(() => {
        console.log(order)
		const document = addDoc(fbCollectionOrders, order)
		document.then( (res) => {
			setCodigo(res.id)
			quitarProducto()
		})
	}, [])
	
	return (
		<div className='cartelCompraRealizada text-center ' >
			<h2>Tu compra ha sido realizada correctamente!</h2>
			<p>Código para ver el detalle: <b>{codigo}</b></p>
		</div>
	)
}

export default CompraRealizada