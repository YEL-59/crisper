import { useState } from "react";
import Product_Details from "./Product_Details/Product_Details";
import NavBar from "../../Components/NavBar/NavBar";

const Product = () => {
  const [navfix, setNavfix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 70) {
      setNavfix(true);
    } else {
      setNavfix(false);
    }
  }
  window.addEventListener("scroll", setFixed);

  const [cartCount, setCartCount] = useState(0);
  const [clickedProducts, setClickedProducts] = useState([]);
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
    setCartCount(updatedProducts.length);
  };
  //  products data
  const products = [
    {
      id: 1,
      name: "Chicken Burger",
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_1280.jpg",

      price: 230,
      discount: 70,

      title: "Best View in New Yjlork City",
      description:
        "Chicken Fajitas served with rice and beans, tortillas, guacamole, salsa and sour cream chicken Fajitas served",
      timestamp: "2024-03-17T04:30:00",
      PostId: "123",
      quantity: 1,
      availability: 9,
    },
    {
      id: 2,
      name: "Pizza",
      imageUrl:
        "https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_640.jpg",

      price: 200,
      discount: 20,

      title: "Best View in ",
      description:
        "Chicken Fajitas served with rice and beans, tortillas, guacamole, salsa and sour cream chicken Fajitas served",
      timestamp: "2024-03-17T10:30:00",
      PostId: "124",
      quantity: 1,
      availability: 5,
    },
    {
      id: 3,
      name: "Toast",
      imageUrl:
        "https://cdn.pixabay.com/photo/2021/02/13/11/05/toast-6011147_640.jpg",

      price: 350,
      discount: 55,

      title: "Best View in New ",
      description:
        "Chicken Fajitas served with rice and beans, tortillas, guacamole, salsa and sour cream chicken Fajitas served",
      timestamp: "2024-03-17T10:30:00",
      PostId: "125",
      quantity: 1,
      availability: 4,
    },
    {
      id: 4,
      name: "Burger",
      imageUrl:
        "https://cdn.pixabay.com/photo/2018/07/14/21/30/club-sandwich-3538455_640.jpg",

      price: 465,
      discount: 50,

      title: "Best View in New York Cit",
      description:
        "Chicken Fajitas served with rice and beans, tortillas, guacamole, salsa and sour cream chicken Fajitas served",
      timestamp: "2024-03-17T09:30:00",
      PostId: "126",
      quantity: 1,
      availability: 2,
    },
    {
      id: 5,
      name: "Hot Tea",
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/04/14/15/47/coffee-722270_640.jpg",

      price: 565,
      // discount: 35,

      title: "Best View in New York ",
      description:
        "Chicken Fajitas served with rice and beans, tortillas, guacamole, salsa and sour cream chicken Fajitas served",
      timestamp: "2024-03-17T01:30:00",
      PostId: "127",
      quantity: 1,
      availability: 3,
    },
    {
      id: 6,
      name: "Bun",
      imageUrl:
        "https://cdn.pixabay.com/photo/2021/11/06/04/02/choripan-6772367_640.jpg",

      price: 566,
      // discount: 10,

      title: "Best View in New York Ci",
      description:
        "Chicken Fajitas served with rice and beans, tortillas, guacamole, salsa and sour cream chicken Fajitas served",
      timestamp: "2024-03-17T20:30:00",
      PostId: "128",
      quantity: 1,
      availability: 7,
    },
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
