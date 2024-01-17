import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Cart from './Components/Cart/Cart';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/contacto" element={<Contact/>}/>
        <Route exact path="/carrito" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
