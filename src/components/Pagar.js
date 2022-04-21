import { useState } from 'react'

const Pagar = ({cargaDeDatos}) => {

	const [validacion, setValidacion] = useState(false)

	const confirmacion = (e) => {
		setValidacion( e.target.form[0].validity.valid & e.target.form[1].validity.valid & e.target.form[2].validity.valid & (e.target.form[3].value == e.target.form[4].value) & e.target.form[3].validity.valid & e.target.form[4].validity.valid)
	}

  return (
    <form className='container row mx-auto' onSubmit={e => cargaDeDatos(e)} onChange={e => confirmacion(e)}>
      
        <div className='col-1'></div>
      <div className=' row col-4 text-end'>
        <label className='name my-2'>Nombre</label>
        <label className='lastname my-2'>Apellido</label>
        <label className='phone my-2'>Teléfono</label>
        <label className='mail my-2'>Mail</label>
        <label className='mail my-2'>Reingresa tu mail</label>
      </div>
      <div className=' row col-4 '>
        <input value="as" className='nombre' type='text' pattern='[A-Za-z]+' maxLength='20' placeholder='nombre del comprador' required/>
        <input value="as" className='apellido' type='text' pattern='[A-Za-z]+' maxLength='25' placeholder='apellido del comprador' required/>
        <input value="3512345678" className='telefono' type='text' pattern='[0-9]{10}' maxLength='10' placeholder='ej: 3512345678' required/>
        <input value="as@gmail.com" className='mail' type='email' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' placeholder='mail@duolate.com' required/>
        <input value="as@gmail.com" className='mail' type='email' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' placeholder='mail@coderhouse.com' required/>
      </div>
      <div className='col-2'></div>
		<div className='col-6 row my-3 mx-auto'>
				<button className='botonComprar' disabled={!validacion}>COMPRAR</button>
		</div>
    </form>
  )
}

export default Pagar