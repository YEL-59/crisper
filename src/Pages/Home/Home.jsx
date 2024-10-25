import { useState } from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Product from "../Product/Product";

const Home = () => {
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
  return (
    <>
      <div
        className={`z-20 fixed top-0 bg-white w-full transition-all duration-300 ease-in-out ${
          navfix ? "shadow-lg bg-white" : ""
        }`}
      >
        <NavBar />
      </div>
      <Product />
    </>
  );
};

export default Home;
