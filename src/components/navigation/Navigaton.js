import React, { useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Navigaton = () => {

const navigate = useNavigate()

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(cartItems.length);
    };
  
    // Initial cart count update
    updateCartCount();
  
    // Setup event listener for cart updates
    window.addEventListener('cartUpdated', updateCartCount);
  
    // Cleanup event listener
    return () => window.removeEventListener('cartUpdated', updateCartCount);
  }, []);
  return (
    <div className="bg-white fixed flex items-center justify-between px-[150px] w-[100%] py-[15px] border">
      <i className="flex font-italic">ShoppingCart</i>
      <div className="flex items-center" onClick={()=> navigate('/checkout')}>
        <MdOutlineShoppingCart />
        <span className="p-[2px] w-[18px] h-[18px] text-[14px] bg-[red] text-white rounded-[100%] flex items-center justify-center">
          {cartCount}
        </span>
      </div>
    </div>
  );
};

export default Navigaton;
