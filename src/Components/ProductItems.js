import React from 'react';
import {useParams} from 'react-router';
import Shoes from '../shoes.json';
import prodetails from './productdetail'
function ProductItems() {
  
 const {id} = useParams()
const shoe = Shoes[id]
        if(!shoe){
        return <h2>Product not found</h2>
        }
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