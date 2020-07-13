import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import ProductItems from './Components/ProductItems';
import Navbar from './Components/Navbar';

function Notfound(){
    return <h1>Not Found bru</h1>
  }
function RouteConfig(){
    return(
        <div>
            <Router>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="about" element={<About/>} />
                    <Route path="product" element={<Product/>}></Route>
                    <Route path="/product/:id" element={<ProductItems/>}></Route>
                    <Route path="*" element={<Notfound/>}></Route>
                </Routes>
            </Router>
        </div>
    )
}
export default RouteConfig;