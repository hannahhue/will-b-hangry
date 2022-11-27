// import React, { useState } from 'react';
// // import Navbar from './Navbar';
// import Home from '../pages/Home';
// import Combo from '../pages/Combo';
// import Login from '../pages/Login';
// import Cart from '../pages/Cart';
// import Signup from '../pages/Signup';
// import Products from './Products';

// export default function Container({ currentPage, handlePageChange }) {
//   // const [currentPage, setCurrentPage] = useState('Home');

//   const renderPage = () => {
//     if (currentPage === 'Home') {
//       return (
//         <Home currentPage={currentPage} handlePageChange={handlePageChange} />
//       );
//     }
//     if (currentPage === 'Login') {
//       return <Login />;
//     }
//     if (currentPage === 'Signup') {
//       return <Signup />;
//     }
//     if (currentPage === 'Cart') {
//       return (
//         <Cart currentPage={currentPage} handlePageChange={handlePageChange} />
//       );
//     }
//     if (currentPage === 'Combo') {
//       return <Combo />;
//     }
//     if (currentPage === 'Products') {
//       return <Products />;
//     }
//   };

//   // const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div>
//       {/* <Navbar currentPage={currentPage} handlePageChange={handlePageChange} /> */}
//       {renderPage()}
//     </div>
//   );
// }
