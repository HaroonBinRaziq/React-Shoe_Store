import React from 'react';
import Shoes from '../shoes.json';
import { Link ,Outlet } from 'react-router-dom';
import ProductItems from './ProductItems';

function Product() {
  console.log(Shoes)
  return (
      <div>
          <h1>Welcome to Product</h1>
          <div className="productContainer">
          <ul>
          {Object.entries(Shoes).map(([productId,{name,img}]) =>{
            const shoe = Shoes[productId];
            return(
              <li key={productId}>
                <Link className="link" to={`/product/${productId}`}>
                <h2>{shoe.name}</h2>
                <img src={shoe.img} alt={name} height={150}></img>
                </Link>
              </li>
            )
          }
          )}
          </ul>
          </div>
      </div>
        );
}
export default Product;