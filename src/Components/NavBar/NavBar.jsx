import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import navlogo from "/public/vite.svg";
import { motion } from "framer-motion";
import { FaShoppingBag } from "react-icons/fa";
import QuantityCounter from "../QuantityCounter _Section/QuantityCounter";
import { RiDeleteBin5Line } from "react-icons/ri";
const NavBar = ({ cartCount, clickedProducts,setClickedProducts,removeProduct }) => {
   //Modify receve arry to convert object.because i want to use map
   const clickedProductArray = clickedProducts
   ? Object.values(clickedProducts)
   : [];
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  let Links = [
    { name: "Menu", link: "/" },
    { name: "Rewards", link: "/about_us" },
    { name: "Location", link: "/service" },
    { name: "Gift Cards", link: "/contact_us" },
    { name: "Log In", link: "/product" },
  ];
  console.log("pass to navbar", clickedProducts);
  let [open, setOpen] = useState(false);
  // Define state for total price
  const [totalPrice, setTotalPrice] = useState(0);
 
 


  const handleQuantityChange = (newQuantity, productId) => {
    const updatedProducts = clickedProducts.map(product => {
      if (product.id === productId) {
        const updatedProduct = { ...product, quantity: newQuantity };
        updatedProduct.totalPrice = updatedProduct.price * updatedProduct.quantity;
        return updatedProduct;
      }
      return product;
    });
    setClickedProducts(updatedProducts); // Update clickedProducts state
  };

   // Calculate the total price of items in the cart
   useEffect(() => {
    const calculatedTotal = (clickedProducts ?? []).reduce(
      (sum, product) => sum + (product.totalPrice || product.price * product.quantity),
      0
    );
    setTotalPrice(calculatedTotal);
  }, [clickedProducts]);
  console.log("***updated price", totalPrice);
  console.log(clickedProducts ?? []);
 

  console.log("array of clicked item cart", clickedProductArray ?? []);


  
  return (
    <>
      <div>
        <nav className="container mx-auto md:flex justify-between items-center text-orange-500 py-[18.5px] p-5 lg:py-5 px-0">
          <div className="p-2 md:p-0 lg:p-0 ">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "linear",
                duration: 2,
              }}
            >
              {" "}
              <img
                src={navlogo}
                alt=" main logo"
                className="w-[7rem] h-12  drop-shadow-xl"
              />
            </motion.div>
          </div>

          <motion.div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden"
            whileHover={{ scale: 1.1 }}
          >
            {open ? "x" : "..."}
          </motion.div>

          <motion.ul
            className={`md:flex md:items-center md:bg-inherit md:pb-0 pb-12 absolute md:static text-gray-600 bg-white md:z-auto z-[1] right-0 w-full h-screen md:h-full md:w-auto md:pl-0 pl-5 gap-5 transition-all duration-500 ease-in-out ${
              open ? "right-19" : "hidden"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "linear", duration: 2 }}
          >
            {Links.map((link) => (
              <motion.li
                key={link.name}
                className="md:ml-4 md:text-[11px] truncate md:my-0 my-7 lg:text-lg relative group"
                whileHover={{ scale: 1.1 }}
              >
                <span className="absolute inset-x-0 bottom-0 h-.5 bg-orange-500 border-b border-transparent transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                <Link
                  to={link.link}
                  className="duration-500 font-bold hover:text-orange-500"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
            <motion.li
              className="md:hidden my-3 truncate"
              whileHover={{ scale: 1.1 }}
            >
              <Link to="booking">Booking Now</Link>
            </motion.li>
            <motion.li
              className="md:hidden truncate"
              whileHover={{ scale: 1.1 }}
            >
              <Link to="signup">Create An Account</Link>
            </motion.li>
          </motion.ul>

          <div
            className={`hidden md:flex md:items-center ml-2 md:justify-between md:gap-5 ${
              open ? "right-19" : "hidden"
            }`}
          >
            <button className="bg-orange-500 text-white md:text-[11px] lg:text-[16px] px-3 py-1 rounded font-semibold lg:font-medium truncate">
              <Link to="/booking">Order now</Link>
            </button>
            

            <button
              type="button"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)} // Toggle drawer visibility
              className="relative inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-400 "
            >
              <FaShoppingBag />
              {cartCount > 0 && ( // Only show the count if cartCount is greater than 0
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                  {cartCount}
                </div>
              )}
            </button>

            <div
              className={`${
                isDrawerOpen ? "translate-x-0" : "translate-x-full"
              } fixed top-0 right-0 z-40 h-screen w-[30%] p-4 overflow-y-auto transition-transform bg-orange-600  dark:bg-orange-600`}
            >
              {/* Drawer content */}
              <h5 className="inline-flex items-center mb-4 text-base font-semibold text-black dark:text-black ">
                Right drawer
              </h5>
              <button
                type="button"
                onClick={() => setIsDrawerOpen(false)} // Close drawer
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close menu</span>
              </button>
              {/* Conditional rendering based on cartCount */}
              {cartCount === 0 ? (
                <p className="mt-4 text-sm text-black">
                  - Add item to the cart -
                </p>
              ) : (
                <div className="flex flex-col py-8 md:py-10 lg:py-8 border-t border-gray-50">
                  {clickedProductArray.map((product, index) => (
                  

                    <a key={index}
                      href="#"
                      className="flex flex-col items-center  border border-white rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:hover:bg-transparent dark:border-white mb-2"
                    >
                      <img
                        className="object-cover w-full h-44 rounded md:w-48 md:rounded-none md:rounded-s-lg p-2"
                        src={product.imageUrl}
                        alt=""
                      />
                      <div className="flex flex-col justify-between p-4 leading-normal">
                      <div className="flex flex-row justify-between  leading-normal">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {product.name}
                        </h5>
                        <h5 
                        onClick={() => removeProduct(product.id)}
                        className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <RiDeleteBin5Line />
                        </h5>
                      </div>
                        <p className="mb-3 font-normal text-black">
                        {product.description}
                        </p>

                        <div className="flex items-center justify-between w-full">
                          <p className="text-base font-black leading-none text-gray-800">
                          {product.totalPrice
                              ? `$${product.totalPrice.toFixed(2)}`
                               : `$${product.price}`}
                          </p>
                          <QuantityCounter
                            initialValue={product.quantity}
                            availability={product.availability}
                            onQuantityChange={(newQuantity) =>
                              handleQuantityChange(newQuantity, product.id)
                            }
                          />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
               <div className="mt-8 pt-4 border-t border-white">
              <p className="text-lg font-bold text-white">
                Total Price: ${totalPrice}
              </p>
            </div>
            </div>
            
          </div>
        </nav>
      </div>
      <div></div>
    </>
  );
};

export default NavBar;
