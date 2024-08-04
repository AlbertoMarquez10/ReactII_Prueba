import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { PizzaContext } from '../context/PizzaContext'

const BannerCarrito = () => {
  const { total } = useContext(PizzaContext)
  return (
    <>
      <header className='d-flex justify-content-between bg-info text-white ancho flex-grow-1 px-5'>
        <section><h4><NavLink className='text-decoration-none' to='/'>Pizzería Mamma Mía!</NavLink></h4></section>
        <section>Carrito: ${total}</section>
      </header>
    </>
  )
}

export default BannerCarrito
