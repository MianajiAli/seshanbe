// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route,Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Counters from './components/Counters/Counters';
import Footer from './components/Footer/Footer';
import Shop from './components/Shop/Shop';
import SingleProduct from './components/SingleProduct/SingleProduct';
import NoPage from './components/NoPage/NoPage.jsx'; // Assuming you have a NoPage component for 404

function Layout() {
  return (
      // #8A2DFC
    <div className='bg-c-back2 min-h-screen text-white'>
      <Header />
      <div className='pt-20 w-[90%] mx-auto '>
      <Outlet /> {/* This will render the matched child route */}
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Counters />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:id" element={<SingleProduct />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
