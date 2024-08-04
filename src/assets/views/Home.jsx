import HomeCards from '../components/HomeCards'
import { PizzaContext } from '../context/PizzaContext'
import { useContext } from 'react'

const Home = () => {
  const { pizza } = useContext(PizzaContext)
  return (
    <>
      <header className='d-flex flex-column bg-dark text-white text-center py-5'> <h1>Pizzeria Mamma Mia!</h1>
        <h3>¡Tenemos las mejores pizzas que podras encontrar!</h3>
      </header>
      <section className='d-flex flex-wrap gap-3 central'>
        {pizza.map((producto) => (
          <HomeCards key={producto.id} pizza={producto} />
        ))}
      </section>
    </>
  )
}

export default Home
