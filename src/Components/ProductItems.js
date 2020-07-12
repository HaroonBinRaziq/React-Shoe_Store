import React from 'react';
import {useParams} from 'react-router-dom';
import Shoes from '../shoes.json';
function ProductItems() {
  let {id} = useParams()
  const shoe = Shoes[id]
  if(!shoe){
    return <h2>Product not found</h2>
  }
  console.log(shoe)
  return (
      <div>
          <h1>Welcome to Product Items</h1>
          <div className="link">
          <h2>{shoe.name}</h2>
          <img src={shoe.img} height={500} alt="shoe"></img>
          </div>
      </div>
  );
}
export default ProductItems;