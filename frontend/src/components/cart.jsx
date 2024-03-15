import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cart = ({ isOpen, toggleCart }) => {
  const [items, setItems] = useState([
    { name: "MINI SKIRT", price: 150, quantity: 3 },
  ]);

  // Calculate subtotal
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity <= 0) {
      // If new quantity is zero or less, remove the item from the array
      const updatedItems = [...items];
      updatedItems.splice(index, 1);
      setItems(updatedItems);
    } else {
      // Update the quantity of the item
      const updatedItems = [...items];
      updatedItems[index].quantity = newQuantity;
      setItems(updatedItems);
    }
  };

  // Define the removeItem function
  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleCart}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 w-5/6 md:w-1/2 lg:w-1/3 h-full bg-white shadow-md z-50 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between bg-banner px-5 py-8">
          <div className="">
            <h2 className="text-lg serif ">CART</h2>
          </div>
          <button onClick={toggleCart} className="text-2xl text-gray-800">
            x
          </button>
        </div>
        {items.length === 0 ? (
          <div className="p-8 text-center">
            <p>Your cart is empty.</p>
            <div className="flex flex-col gap-4 mt-4">
              <button className="bg-banner px-4 py-3">SHOP NEW IN</button>
              <button className="bg-banner px-4 py-3">SHOP DRESSES</button>
              <button className="bg-banner px-4 py-3">SHOP TOPS</button>
              <button className="bg-banner px-4 py-3 ">SHOP MOST LOVED</button>
            </div>
          </div>
        ) : (
          <div className="p-8">
            {items.map((item, index) => (
              <div key={index} className="grid grid-cols-8 small-size mb-4">
                <div className="col-span-2 px-1">
                  <img
                    src="https://www.vrggrl.com/cdn/shop/files/IMG_9934.jpg?v=1709180411&width=493"
                    alt={item.name}
                  />
                </div>
                <div className="col-span-5 flex flex-col gap-2 px-2">
                  <p className="serif">{item.name}</p>
                  <p className="text-gray-600">SIZE: 12</p>
                  <p className="text-[12px]">NEW SEASON SALE - 30% OFF</p>
                  <div className="flex items-center">
                    <button
                      onClick={() =>
                        handleQuantityChange(index, item.quantity - 1)
                      }
                      className="border-l border-black border-t border-b px-2 py-1 "
                    >
                      -
                    </button>
                    <p className="border-t border-black border-b py-1 px-2">
                      {item.quantity}
                    </p>
                    <button
                      onClick={() =>
                        handleQuantityChange(index, item.quantity + 1)
                      }
                      className="border-t border-b border-black border-r px-2 py-1"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <p>${item.price * item.quantity}</p>
                    <p>${(item.price * item.quantity * 30) / 100}</p>
                  </div>
                  <button
                    onClick={() => removeItem(index)}
                    className="text-gray-600"
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-center gap-4 serif border-t border-black py-4">
              <h3 className="text-lg">SUBTOTAL:</h3>
              <p className="text-lg">${subtotal}</p>
            </div>
            <div className=" w-full border-t border-black flex flex-col items-center">
              <p className="text-[12px]  mt-2">
                Tax included.{" "}
                <Link
                  to="/pages/shipping-delivery"
                  className="text-pantone hover:underline"
                >
                  Shipping
                </Link>{" "}
                calculated at checkout.
              </p>
              <button className="bg-pantone w-full text-white px-4 py-2 mt-4 ">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
