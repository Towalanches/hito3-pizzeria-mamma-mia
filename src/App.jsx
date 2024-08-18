import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <Cart />
      <Footer />
    </div>
  )
}

export default App
