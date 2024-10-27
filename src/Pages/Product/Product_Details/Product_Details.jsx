import { useState } from "react";

import Product_List from "../Product_Components/Product_List/Product_List";



const Product_Details = ({ addToCart, products }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Function to set the filtered products
  const handleFilteredProducts = (filtered) => {
    setFilteredProducts(filtered);
  };

  return (
    <>
      <section>
        <div>
          <div className="container mx-auto grid grid-cols-12 mb-10">
            <div className="col-span-12 lg:col-span-12 mx-auto">
              <div className="text-center">
                <div >
                  <h1 className="text-6xl font-semibold text-orange-500 ">
                    Chicken crisper Combo
                  </h1>

                  <nav className="flex justify-center mt-3 mb-5" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                      <li className="inline-flex items-center">
                        <a
                          href="#"
                          className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-orange-500 dark:text-gray-600 dark:hover:text-orange-500"
                        >
                          <svg
                            className="w-3 h-3 me-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                          </svg>
                          Menu
                        </a>
                      </li>
                      <li>
                        <div className="flex items-center">
                          <svg
                            className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                          <a
                            href="#"
                            className="ms-1 text-sm font-medium text-gray-600 hover:text-orange-500 md:ms-2 dark:text-gray-600 dark:hover:text-orange-500"
                          >
                            chicken crisper
                          </a>
                        </div>
                      </li>
                      <li aria-current="page">
                        <div className="flex items-center">
                          <svg
                            className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 9 4-4-4-4"
                            />
                          </svg>
                          <span className="ms-1 text-sm font-medium text-gray-600 md:ms-2 dark:text-gray-600 dark:hover:text-orange-500">
                            combo
                          </span>
                        </div>
                      </li>
                    </ol>
                  </nav>
                  <h1 className="text-xl font-normal text-black ">
                    Find Everything from our Big Mouth Burger, our always sizing,Full-on Fajitas and our famous chicken crispers.
                  </h1>
                </div>
              
             
              </div>
              <div className="mt-10">
                {/* Render Product_List with filteredProducts if available, otherwise render all products */}
                {filteredProducts.length > 0 ? (
                  <Product_List
                    products={filteredProducts}
                    addToCart={addToCart}
                  />
                ) : (
                  <Product_List
                    products={products}
                    postId={products.PostId}
                    addToCart={addToCart}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product_Details;
