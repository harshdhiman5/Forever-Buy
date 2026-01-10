// import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom"
import Navbar from './Navbar';
import Home from './Home';
import Collection from './Collection';
import Footer from './Footer';
import ProductDetails from './ProductDetails';
import About from './About';
import Contact from './Contact';
import LoginForm from './LoginForm';
import Cart from "./Cart";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/collection' element={<Collection></Collection>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/login' element={<LoginForm></LoginForm>}></Route>
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path='/cart' element={<Cart></Cart>}/>
          
      
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </>
  );
}

export default App;
