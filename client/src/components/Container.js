import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Products from "../components/Products";
import Login from "../pages/Login";
import Cart from "../pages/Cart";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Login") {
      return <Login />;
    }
    if (currentPage === "Cart") {
      return <Cart />;
    }
    if (currentPage === "Products") {
      return <Products />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
