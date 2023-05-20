import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header.js';
import Home from './components/Home.js';
import Form from './components/Form.js';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/form/:endpoint" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
