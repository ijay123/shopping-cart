import React, { useEffect, useState } from "react";
import { cartData } from "../dataSet/cartData";

const Home = () => {
  const AddToCart = (id) => {
    // Retrieve the current cart from localStorage, or initialize as empty array if none exists
    let currentCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Find the index of the item in the cart
    const itemIndex = currentCart.findIndex((item) => item.id === id);

    if (itemIndex > -1) {
      // If the item exists, increase its quantity
      currentCart[itemIndex].quantity += 1;
      alert(" product Already added to your cart!");
    } else {
      // If the item doesn't exist, add it with a quantity of 1
      const itemToAdd = {
        ...cartData.find((item) => item.id === id),
        quantity: 1,
      };
      currentCart.push(itemToAdd);
      alert("This product has been added to your cart!");
    }

    // Update the cart in localStorage
    localStorage.setItem("cart", JSON.stringify(currentCart));

    console.log("Cart updated", currentCart);
  };

  const totalTimeInSeconds = 48 * 3600 + 30 * 60 + 45;

  const [timeRemaining, setTimeRemaining] = useState(totalTimeInSeconds);

  useEffect(() => {
    if (timeRemaining > 0) {
      const interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timeRemaining]);

  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="min-h-screen">
      <h1 className="text-[50px] flex justify-center pt-[100px] mb-[100px] font-bold">
        Welcome to our store
      </h1>

      <div className="flex gap-[40px] font-semibold text-[40px] ml-[180px] mb-[60px]">
        <div>Flash Sales</div>{" "}
        <div className="flex gap-[20px]">
          <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </div>
      </div>
      {/* Oranges */}
      <p className="text-[40px] flex justify-center mb-[30px] animate-pulseColor">
        Buy one get one free
      </p>

      <div className="flex flex-wrap gap-[80px] justify-center mx-[200px]">
        {cartData &&
          cartData.slice(0, 2).map((cartItem) => (
            <div
              key={cartItem.id}
              className={`w-[300px] border rounded-[10px]`}
            >
              <img
                src={cartItem.img}
                alt=""
                className="w-[100%] hover:opacity-60 hover:bg-black"
              />
              <p
                onClick={() => AddToCart(cartItem.id)}
                className="w-[100%] flex justify-center bg-[white] py-[8px] text-[white] hover:bg-[green] cursor-pointer"
              >
                Add To Cart
              </p>
              <div className="flex justify-between px-[30px] font-semibold items-center">
                <p className="py-[20px]">{cartItem.name}</p>
                <p className=" ">{cartItem.price}c</p>
              </div>
            </div>
          ))}
      </div>

      {/* apples */}
      <p className="text-[40px] mt-[60px] flex justify-center mb-[30px] animate-pulseColor">
        Buy two get one free
      </p>

      <div className="flex flex-wrap gap-[80px] justify-center mx-[200px]">
        {cartData &&
          cartData.slice(2, 4).map((cartItem) => (
            <div
              key={cartItem.id}
              className={`w-[300px] border rounded-[10px]`}
            >
              <img
                src={cartItem.img}
                alt=""
                className="w-[100%] hover:opacity-60 hover:bg-black"
              />
              <p
                onClick={() => AddToCart(cartItem.id)}
                className="w-[100%] flex justify-center bg-[white] py-[8px] text-[white] hover:bg-[green] cursor-pointer"
              >
                Add To Cart
              </p>
              <div className="flex justify-between px-[30px] font-semibold items-center">
                <p className="py-[20px]">{cartItem.name}</p>
                <p className=" ">{cartItem.price}c</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
