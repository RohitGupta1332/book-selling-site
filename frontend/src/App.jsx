import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { CartProvider } from './context/useCart'
import './App.css'

function App() {

  return (
    <>
      <CartProvider>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      </CartProvider>
    </>
  )
}

export default App
