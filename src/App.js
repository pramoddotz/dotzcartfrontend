import './components/Front.css';
import React from "react"
import Front from './components/Front.js';
import Login from  './components/Login.js';
import Reg from "./components/Reg";
import Home from './components/Home.js';
import Footer from "./components/Footer";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Adminnavebar from './components/Adminnavebar.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Adminlogin from './components/Adminlogin.js';
import Adminhome from './components/Adminhome.js';
import AdminAddProduct from './components/AdminAddProduct.js'
import Editproduct from './components/Edit.js';
import Carousel from "./components/Carousel.js"
import Buynow from './components/Buynow.js';
import Cart from './components/Cart.js';
import ViewyourOrders from "./components/ViewyourOrders";
import Navbar from "./components/Navbar";
import Navebarmain from "./components/Navebarmain";
import Search from "./components/Search";
import Product from "./components/Product";
import Welcomedotz from './components/Welcomedotz.js';
import Navbarmain from './components/Navebarmain';
import ViewallOrders from './components/ViewallOrders.js';
function App() {
  return (
    // <div>
      // <h1>DOTZcart</h1>
      //  <Front/> 
      //  <Login/> 
      //  <Home/> 
      // <Reg/>
    //   {/* <Adminlogin/> */}
    //   {/* <Adminnavebar/> */}
      // <Adminhome/>
      // <Carousel/>
      // <ViewyourOrders/>
      // <Buynow/>
      // <Cart/>
    // </div>
    <BrowserRouter>
    <div className='App'>
    <h1>DOTZcart</h1>
      <Routes>
      <Route path='/Admin' element={<Adminlogin/>} />
      <Route path='/Adminlogin' element={<Adminhome/>} />
      {/* <Route  exact path='/' element={[<Reg/>,<Navbar />]}/> */}
      <Route path="/Login" element={[<Navbar />, <Login />]} />
      <Route path="/Register" element={[<Navbar />, <Reg />]} />
      <Route path="/" element={[<Welcomedotz/>,<Navbar />]} />
      <Route path="/product" element={[<Navebarmain/>, <Carousel />, <Product/>]}/>
      <Route path="/viewyourorders" element={[<Navbarmain/>,<ViewyourOrders/>]}/>
      <Route path="/viewadminproduct" element={[<Adminnavebar />, <Adminhome />]} />
          <Route path="/viewallOrders" element={[<Adminnavebar/>, <ViewallOrders />]}/>
        <Route path='/AdminAddProduct' element={<AdminAddProduct/>} /> 
        <Route path="/buynow" element={[<Navebarmain/>, <Buynow/>]} />
          <Route path="/Cart" element={[<Navebarmain/>, <Cart/>]} />
       <Route path ="/editproduct/:id" element={<Editproduct/>}/>
       <Route path="/SearcedComponent/:title" element={[<Navebarmain/>,<Carousel />,<Search />,]}/>
       <Route path ="/Reg" element={<Reg/>}/>
       <Route path="/home" element={[<Navbar />, <Welcomedotz/>]}/>
       {/* <Route path ="/login" element={<Login/>}/> */}
      </Routes>   
    </div>
    <Footer />
     </BrowserRouter>
   )
}

export default App;