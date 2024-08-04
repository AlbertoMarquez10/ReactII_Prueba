import './App.css'
import ApiBase from './assets/components/ApiBase'
import BannerCarrito from './assets/components/BannerCarrito'
import Home from './assets/views/Home'
import ProductDetails from './assets/views/ProductDetails'
import Order from './assets/views/Order'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import { PizzaProvider } from './assets/context/PizzaContext'
import NotFound from './assets/views/NotFound'

function App () {
  return (
    <>
      <PizzaProvider>
        <ApiBase />
        <BannerCarrito />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pizza/:id' element={<ProductDetails />} />
          <Route path='/carrito/' element={<Order />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </PizzaProvider>

    </>
  )
}

export default App
