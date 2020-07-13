import React from 'react';
import {Link} from 'react-router-dom';

    
function Navbar() {
  return (
    <div >
         <button className="btn1"><Link className="nav"  to="/">Home</Link> {' '}</button>
        <button className="btn2"> <Link className="nav1" to="/about">About</Link></button>
       <button className= "btn3"> <Link className="nav2" to="/product">Product</Link></button>
          
    </div>
  );
}
export default Navbar;