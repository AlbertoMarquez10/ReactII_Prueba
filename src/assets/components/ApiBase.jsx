import { useContext, useEffect } from 'react'
import { PizzaContext } from '../context/PizzaContext'

const pizzas = '/pizzas.json'
const ApiBase = () => {
  const { setPizza } = useContext(PizzaContext)
  const requestLogic = async () => {
    const request = await fetch(pizzas)
    const respons = await request.json()
    setPizza(respons)
  }
  useEffect(() => {
    requestLogic()
  }, [])

  return (<></>)
}

export default ApiBase
