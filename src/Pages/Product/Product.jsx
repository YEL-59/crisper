import { useState } from "react";
import Product_Details from "./Product_Details/Product_Details";
import NavBar from "../../Components/NavBar/NavBar";

const Product = () => {
  const [navfix, setNavfix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 70) {
      setNavfix(true);
      //console.log(scrollY)
    } else {
      setNavfix(false);
    }
  }
  window.addEventListener("scroll", setFixed);

  const [cartCount, setCartCount] = useState(0);
  const [clickedProducts, setClickedProducts] = useState([]); // Array to hold clicked products
  // Function to handle adding item to cart
  const addToCart = (product) => {
    // Check if the product is already clicked
    if (!clickedProducts.some((p) => p.id === product.id)) {
      setCartCount(cartCount + 1);
      // Update clickedProducts array with new clicked product
      setClickedProducts((prevClickedProducts) => [
        ...prevClickedProducts,
        product,
      ]);
    }
    console.log("product page to navbar (cartnumber):", clickedProducts);
    //console.log(product);
  };
  // Function to handle removing an item from the cart
  const removeProduct = (productId) => {
    const updatedProducts = clickedProducts.filter(
      (product) => product.id !== productId
    );
    setClickedProducts(updatedProducts);
    setCartCount(updatedProducts.length); // Update cart count accordingly
  };
  // Sample products data
  const products = [
    {
      id: 1,
      name: "Chicken",
      imageUrl: "https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_1280.jpg",

      price: 1,
      discount: 70,
      category: "Photos",
      title: "Best View in New Yjlork City",
      description: "Chicken Fajitas served with rice and beans, tortillas, guacamole, salsa and sour cream chicken Fajitas served",
      timestamp: "2024-03-17T04:30:00",
      PostId: "123",
      quantity: 1,
      availability: 9,
    },
    {
      id: 2,
      name: "Product 2",
      imageUrl: "https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_640.jpg",

      price: 2,
      discount: 20,
      category: "Photos",
      title: "Best View in ",
      description: "Chicken Fajitas served with rice and beans, tortillas, guacamole, salsa and sour cream chicken Fajitas served",
      timestamp: "2024-03-17T10:30:00",
      PostId: "124",
      quantity: 1,
      availability: 5,
    },
    {
      id: 3,
      name: "Product 3",
      imageUrl: "https://cdn.pixabay.com/photo/2021/02/13/11/05/toast-6011147_640.jpg",

      price: 3,
      discount: 55,
      category: "Photos",
      title: "Best View in New ",
      description: "Chicken Fajitas served with rice and beans, tortillas, guacamole, salsa and sour cream chicken Fajitas served",
      timestamp: "2024-03-17T10:30:00",
      PostId: "125",
      quantity: 1,
      availability: 4,
    },
    {
      id: 4,
      name: "Product 4",
      imageUrl: "https://cdn.pixabay.com/photo/2018/07/14/21/30/club-sandwich-3538455_640.jpg",

      price: 4,
      discount: 50,
      category: "Photos",
      title: "Best View in New York Cit",
      description: "Chicken Fajitas served with rice and beans, tortillas, guacamole, salsa and sour cream chicken Fajitas served",
      timestamp: "2024-03-17T09:30:00",
      PostId: "126",
      quantity: 1,
      availability: 2,
    },
    {
      id: 5,
      name: "Product 5",
      imageUrl: "https://cdn.pixabay.com/photo/2015/04/14/15/47/coffee-722270_640.jpg",

      price: 5,
      // discount: 35,
      category: "Photos",
      title: "Best View in New York ",
      description: "Chicken Fajitas served with rice and beans, tortillas, guacamole, salsa and sour cream chicken Fajitas served",
      timestamp: "2024-03-17T01:30:00",
      PostId: "127",
      quantity: 1,
      availability: 3,
    },
    {
      id: 6,
      name: "Product 6",
      imageUrl: "https://cdn.pixabay.com/photo/2021/11/06/04/02/choripan-6772367_640.jpg",

      price: 6,
      // discount: 10,
      category: "Photos",
      title: "Best View in New York Ci",
      description: "Chicken Fajitas served with rice and beans, tortillas, guacamole, salsa and sour cream chicken Fajitas served",
      timestamp: "2024-03-17T20:30:00",
      PostId: "128",
      quantity: 1,
      availability: 7,
    },
    // Add more products as needed
  ];
  return (
    <>
      <section>
        <div
          className={`z-20 fixed top-0 bg-white w-full transition-all duration-300 ease-in-out ${
            navfix ? "shadow-lg bg-white" : ""
          }`}
        >
          <NavBar
            cartCount={cartCount}
            addToCart={addToCart}
            product={products}
            clickedProducts={clickedProducts}
            removeProduct={removeProduct}
          />
        </div>
        <div className="mt-24">
          <Product_Details addToCart={addToCart} products={products} />
        </div>
      </section>
    </>
  );
};

export default Product;
