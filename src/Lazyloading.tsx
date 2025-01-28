// import React, { Suspense, lazy, useState } from "react";
// import { Navbar, Nav } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Home = lazy(() => import("./Component/Home.tsx"));
// const Product = lazy(() => import("./Component/Product.tsx"));
// const User = lazy(() => import("./Component/User.tsx"));

// function Lazyloading() {
//   const [selectedComponent, setSelectedComponent] = useState('home'); 
//   const handleNavigation = (component) => {
//     setSelectedComponent(component);
//   };
  
//   return (
//     <>
 
//       <Navbar bg="dark" variant="dark" expand="lg">
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto">
//             <Nav.Link onClick={() => handleNavigation('home')}>Home</Nav.Link>
//             <Nav.Link onClick={() => handleNavigation('product')}>Product</Nav.Link>
//             <Nav.Link onClick={() => handleNavigation('user')}>User</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

     
//       <Suspense fallback={<div>Loading...</div>}>
//         {selectedComponent === 'home' && <Home />}
//         {selectedComponent === 'product' && <Product />}
//         {selectedComponent === 'user' && <User />}
//       </Suspense>
//     </>
//   );
// }

// export default Lazyloading;

import  React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './Component/Home.tsx';

const User = React.lazy(() => import('./Component/User.tsx'));

const Lazyloading = () => {
  return (
    <>
      <h1>React Router</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/User">User</Link>
      </nav>

      <React.Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="User" element={<User />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </React.Suspense>
    </>
  );
};

const NoMatch = () => {
  return <p>There's nothing here: 404!</p>;
};

export default Lazyloading;
