// libs
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// components
import MainPage from './components/page-main_page/main_page';
import CoffeeList from './components/page-coffee_list/coffee_list';
import Pleasure from './components/page-pleasure/pleasure';


// styles
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/pleasure' element={<Pleasure />} />
        <Route path='/coffeelist' element={<CoffeeList />} />
      </Routes>
    </Router>
  </>
);
