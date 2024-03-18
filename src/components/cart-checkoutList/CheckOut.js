import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  const navigate = useNavigate();

  const increaseQuantity = (id) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(newCartItems);
    localStorage.setItem("cart", JSON.stringify(newCartItems));
  };

  const decreaseQuantity = (id) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(newCartItems);
    localStorage.setItem("cart", JSON.stringify(newCartItems));
  };

  const removeItem = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
    localStorage.setItem("cart", JSON.stringify(newCartItems));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div className="pt-[110px] font-semibold min-h-screen">
      <div
        onClick={() => navigate("/")}
        className="bg-gray-100 w-[120px] ml-[20px] mb-[20px] py-[10px] rounded-[20px] flex justify-center items-center"
      >
        <FaArrowLeft className="text-[30px]" />
      </div>
      <h1 className="text-[40px] pb-[50px] pl-[20px]">Cart Items</h1>
      <table className="min-w-full table-auto text-left">
        <thead className="bg-gray-100">
          <tr className="flex justify-between items-center text-sm font-medium text-gray-700">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Price($)</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Total</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {/* Mapping through cart items */}
          {cartItems &&
            cartItems.map((cart, id) => (
              <tr
                className="flex justify-between items-center px-[20px] border-b last:border-b-0"
                key={id}
              >
                <td className="flex items-center px-4 py-3 space-x-3">
                  <img
                    src={cart.img}
                    alt=""
                    className="w-16 h-16 object-cover rounded"
                  />
                  <span>{cart.name}</span>
                </td>
                <td className="px-4 py-3">{cart.price.toFixed(2)}c</td>
                <td className="px-4 py-3 flex gap-[10px] items-center">
                  <span
                    className="bg-[green] px-[10px] text-white"
                    onClick={() => decreaseQuantity(cart.id)}
                  >
                    -
                  </span>
                  {cart.quantity}
                  <span
                    className="bg-[green]  px-[10px] text-white"
                    onClick={() => increaseQuantity(cart.id)}
                  >
                    +
                  </span>
                </td>
                <td className="px-4 py-3 ">{cart.quantity * cart.price}c</td>
                <td
                  onClick={() => removeItem(cart.id)}
                  className="px-4 py-3 cursor-pointer bg-[green] flex items-center justify-center h-[30px] text-white"
                >
                  Remove
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <p className="text-[40px] mt-[80px]">
        Check-Out(Sum total) : {total.toFixed(2)}c
      </p>
    </div>
  );
};

export default CheckOut;
