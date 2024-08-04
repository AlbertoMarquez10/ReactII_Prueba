import { useContext } from 'react'
import { PizzaContext } from '../context/PizzaContext'

const OrderItem = ({ cart }) => {
  const { incrementarCantidad, reducirCantidad } = useContext(PizzaContext)
  const totalParcial = parseInt(cart.price) * cart.cantidad
  const totalParcialShow = new Intl.NumberFormat('de-DE').format(totalParcial)
  return (
    <>
      <div className='bg-white d-flex justify-content-between align-items-center p-2'>
        <div className='d-flex justify-content-start align-content-end gap-2'>
          <figure className='my-auto'><img className='min' src={cart.img} alt={cart.name} /></figure>
          <p className='my-auto'>{cart.name}</p>
        </div>
        <div className='d-flex justify-content-end align-content-end gap-2'>
          <p className='my-auto text-success'>${totalParcialShow}</p>
          <button className='my-auto btn btn-danger' onClick={() => reducirCantidad(cart.id)}>-</button>
          <p className='my-auto'>{cart.cantidad}</p>
          <button className='my-auto btn btn-primary' onClick={() => incrementarCantidad(cart.id)}>+</button>
        </div>
      </div>

    </>

  )
}

export default OrderItem
