import { Routes, Route} from 'react-router-dom'
import { Container } from "react-bootstrap"
import ComponentNav from './components/Navbar'
import Shop from './pages/shop'
import { CartProvider} from './content/cartContent'
import MyFooter from './components/footer'
function App() {
  return (
    <CartProvider>
    <Container>
        <ComponentNav></ComponentNav>
    <Routes>
      <Route path='/' element= {<Shop/>} />
    </Routes>
    <MyFooter></MyFooter>
    </Container>
    </CartProvider>
  )
}

export default App