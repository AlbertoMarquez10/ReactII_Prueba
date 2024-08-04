import OrderItem from '../components/OrderItem'
import { PizzaContext } from '../context/PizzaContext'
import { useContext } from 'react'

const Order = () => {
  const { carrito, total, setTotal } = useContext(PizzaContext)
  let totalcarrito = 0
  let totalcarritoShow = 0
  const calculoTotal = () => {
    carrito.forEach(element => {
      totalcarrito += element.price * element.cantidad
    })
    totalcarritoShow = new Intl.NumberFormat('de-DE').format(totalcarrito)
    setTotal(totalcarritoShow)
  }
  calculoTotal()

  return (
    <div className='container mt-5 p-5 bg-light ancho'>
      <h5 className='row'>Detalle del pedido:</h5>
      {carrito.map((cart) => (
        <OrderItem key={cart.id} cart={cart} />
      ))}
      <h2 className='row'>Total: ${total}</h2>
      <button className='row btn btn-success'>Ir a Pagar</button>
    </div>
  )
}

export default Order
