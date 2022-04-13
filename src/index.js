// libs
import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import MainPage from './components/page-main_page/main_page';
import CoffeeList from './components/page-coffee_list/coffee_list';
import Pleasure from './components/page-pleasure/pleasure';


// styles
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <MainPage /> */}
    {/* <CoffeeList/> */}
    <Pleasure/>
  </>
);
