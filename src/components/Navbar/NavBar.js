import React from "react";
import cart from "./cart.svg";
import "./NavBar.css";

const NavBar = ({ count, onOpen }) => {
   return (
      <nav className="navbar text-white">
         <div className="container mx-auto">
            <span className="fs-3">ReactMeals</span>
            <div className="box">
               <img src={cart} alt="Cart" />
               <button className="ms-2 button" onClick={onOpen}>
                  view Cart
               </button>
               <span className="count">{count}</span>
            </div>
         </div>
      </nav>
   );
};

export default NavBar;
