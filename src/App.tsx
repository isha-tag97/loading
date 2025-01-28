import React from 'react';
import './App.css';
import Lazyloading from './Lazyloading.tsx';
// bootsrap.min.css
import 'bootstrap/dist/css/bootstrap.min.css';
//bootstrap.min.js OR bundle
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Lazyloading/>
    </BrowserRouter>
    </>
  );
}

export default App;
