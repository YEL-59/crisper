import { useState } from "react";



const Single_Product_Card = ({ product, addToCart }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Calculate discounted price
  const discountedPrice =
    product.price - (product.price * product.discount) / 100;



  // Check if discount is 50% or higher
  const isHighDiscount = product.discount >= 50;

  // Function to handle adding item to cart
  const handleAddToCart = () => {
    addToCart(product); // Pass the product object to the addToCart function
  };
  return (
    <>
      <div className="rounded-xl overflow-hidden shadow-lg max-w-sm bg-gray-100">
        
          <div className="relative ">
           
            <img className="w-full h-[25vh] p-5" src={product.imageUrl} alt="Product" />
            
           
            {product.discount && (
              <span
                className={`discount-tag rounded-lg right-0 top-0 mr-2 mt-2 px-2 py-1 bg-red-500 text-white absolute ${
                  isHighDiscount
                    ? "transition transform duration-700 animate-pulse font-bold bg-gradient-to-r from-red-500 to-pink-500"
                    : "bg-red-500"
                }`}
              >
                {product.discount}% OFF
              </span>
            )}
          </div>
      
        <div className="px-6">
          <a
            href="#"
            className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
          >
            {product.name}
          </a>
          <p className="text-gray-500 text-sm">{product.description}</p>
        </div>
        <div className="px-6 py-2 flex flex-col items-start relative">
          <div>

          <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
           
            {product.discount ? (
              <>
                <del className="ml-1">${product.price}</del>
                <span className="ml-1">${discountedPrice.toFixed(2)}</span>
              </>
            ) : (
              <span className="ml-1">${product.price}</span>
            )}
          </span>
          </div>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-2.5 mb-2 dark:bg-orange-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            type="button"
            onClick={handleAddToCart} 
            
          >
            Add to cart
          </button>
          <button
            className="text-white bg-orange-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-2.5 mb-2 dark:bg-white dark:border-2 border-orange-500 dark:text-black dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-blue-800"
            type="button"
            
            
          >
            Customize
          </button>
         
        </div>
      </div>{" "}
    </>
  );
};

export default Single_Product_Card;
