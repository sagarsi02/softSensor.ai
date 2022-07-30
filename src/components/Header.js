import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  console.log(location);
  return (
    <nav id="navbar">
      {/* {location.pathname === '/' ? <Link to="/cart"><i className="fa-solid fa-cart-plus"></i>Cart</Link> : <Link to="/">Home</Link>} */}
      <ul>
        <li>{location.pathname === '/' ? <Link to="/cart"><i className="fa-solid fa-cart-plus"></i>Cart</Link> : <Link to="/">Home</Link>}</li>
      </ul>
    </nav>
  );
}
