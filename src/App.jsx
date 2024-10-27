import { Routes, Route } from 'react-router-dom';

import Product from './Pages/Product/Product';


function App() {
  

  return (
    <>
   <Routes>
  
   <Route path="/" element={<Product />} />
   </Routes>
    
    </>
  )
}

export default App
