import React from 'react'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import ProductItems from './Components/ProductItems';
import Navbar from './Components/Navbar';
function RouteConfig(){
    return(
        <div>
            <Router>
                <Navbar></Navbar>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route exact path="/product" component={Product}></Route>
                    <Route path="/product/:id" component={ProductItems}></Route>
                    <Route path="*" component={()=><h2>404 Not Found</h2>}></Route>
                </Switch>
            </Router>
        </div>
    )
}
export default RouteConfig;