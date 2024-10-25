import { useState } from "react";


import Product_List from "../Product_Components/Product_List/Product_List";
import Product_Search from "../Product_Components/Product_Search/Product_Search";
import Secondary_Title_Section from "../../../Components/Secondary_Title_Section/Secondary_Title_Section";

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
              <div>123</div>
              <div>
                <div className="mt-2">
                  <Secondary_Title_Section
                    secondary_title={"Our Collection Of Products"}
                  />
                </div>
                {/* Pass products and handleFilteredProducts as props to Product_Search */}
                <Product_Search
                  products={products}
                  setFilteredProducts={handleFilteredProducts}
                />
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
