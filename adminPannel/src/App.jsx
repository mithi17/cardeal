import { useState } from 'react';
import Sidebar from './components/sideBar/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/pages/dashBoard/Dashboard';
import Product from './components/pages/products/Product';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/products" element={<Product />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
