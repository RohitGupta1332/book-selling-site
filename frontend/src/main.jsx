import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Routes
import App from './App.jsx';
import './index.css';
import Home from './components/Home.jsx';
import AllBooks from './components/AllBooks.jsx';
import BookDetails from './components/BookDetails.jsx';
import Cart from './components/Cart.jsx';
import ResultSearch from './components/ResultSearch.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="allbooks" element={<AllBooks />} />
          <Route path="categories/:category" element={<AllBooks />} />
          <Route path="getbyid/:id" element={<BookDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="search/:book" element={<ResultSearch/>}/>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
