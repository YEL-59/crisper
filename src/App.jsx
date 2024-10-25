import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';


function App() {
  

  return (
    <>
   <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/" element={<Product />} />
   </Routes>
    
    </>
  )
}

export default App
