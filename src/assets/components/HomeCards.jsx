import React, { useContext } from 'react'
import { PizzaContext } from '../context/PizzaContext'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { NavLink, useNavigate } from 'react-router-dom'

const HomeCards = ({ pizza }) => {
  const { addToCart } = useContext(PizzaContext)
  const navigate = useNavigate()
  const goPizza = () => navigate(`/pizza/${pizza.id}`)
  const parsePrice = parseInt(pizza.price)
  const priceShow = new Intl.NumberFormat('de-DE').format(parsePrice)

  return (
    <>
      <Card style={{ width: '18rem' }} key={pizza.id}>
        <Card.Img variant='top' src={pizza.img} />
        <Card.Body>
          <Card.Title>{pizza.name.toUpperCase()}</Card.Title>
          <hr />
          <Card.Text>
            <p className='fw-bold'>Ingredientes:</p>
            {pizza.ingredients.map((ing, i) => (
              <li key={i} className='ps-4'>{ing}</li>
            ))}

          </Card.Text>
          <hr />
          <h4 className='text-center fw-bold fs-2 mb-4'>${priceShow}</h4>
          <NavLink to={`/pizza/${pizza.id}`}><Button variant='primary' className='me-1 ms-3 px-4' onClick={goPizza}>Ver Más</Button></NavLink>
          <NavLink to='/carrito'><Button className='mx-1 btn btn-danger px-4' onClick={() => addToCart(pizza)}>Añadir</Button></NavLink>
        </Card.Body>
      </Card>
    </>

  )
}

export default HomeCards
