import { createContext, useState } from 'react'

export const PizzaContext = createContext()

export const PizzaProvider = ({ children }) => {
  const [pizza, setPizza] = useState([])
  const [carrito, setCarrito] = useState([])
  const [total, setTotal] = useState(0)
  const addToCart = (pizzaSelected) => {
    setCarrito([...carrito, { ...pizzaSelected, cantidad: 1 }])
    // alert(`La pizza ${pizzaSelected.name} fue agregada`)
  }
  const incrementarCantidad = (id) => {
    return setCarrito(
      carrito.map((piz) => {
        return piz.id === id ? { ...piz, cantidad: piz.cantidad + 1 } : piz
      })
    )
  }
  const reducirCantidad = (id) => {
    return setCarrito(
      carrito.map((piz) => {
        if (piz.cantidad <= 1) {
          return piz
        }
        return piz.id === id ? { ...piz, cantidad: piz.cantidad - 1 } : piz
      })
    )
  }

  const globalState = {
    pizza,
    setPizza,
    addToCart,
    carrito,
    incrementarCantidad,
    reducirCantidad,
    total,
    setTotal
  }

  return (
    <PizzaContext.Provider value={globalState}>{children}</PizzaContext.Provider>
  )
}
