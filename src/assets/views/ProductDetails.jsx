import { NavLink, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { PizzaContext } from '../context/PizzaContext'

const ProductDetails = () => {
  const { id } = useParams()
  const { pizza, addToCart } = useContext(PizzaContext)

  const pizzaDetails = pizza.find((b) => b.id === id)
  const priceDetails = parseInt(pizzaDetails.price)
  const priceShowDetails = new Intl.NumberFormat('de-DE').format(priceDetails)

  return (
    <div className='container mt-5'>
      {pizzaDetails
        ? (
          <div className='row'>
            <figure className='col figure'>
              <img className='figure-img img-fluid' src={pizzaDetails.img} />
            </figure>
            <aside className='col'>
              <h2>{pizzaDetails.name.toUpperCase()}</h2>
              <p>{pizzaDetails.desc}</p>
              <h4>Ingredientes:</h4>
              {pizzaDetails.ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
              <div className='row'>
                <p className='col fw-bold fs-4'>Precio: ${priceShowDetails}</p>
                <NavLink to='/carrito' className='col' onClick={() => addToCart(pizzaDetails)}><button className='btn btn-danger ms-5'>Añadir</button></NavLink>
              </div>
            </aside>
          </div>
          )
        : (
          <p>Pizza listada no es parte del stock</p>
          )}
    </div>

  )
}

export default ProductDetails
