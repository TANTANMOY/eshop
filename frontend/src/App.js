import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <div>
      <header>
        <a href="/">amazona</a>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:slug" element={<ProductScreen />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
