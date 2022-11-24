import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Topping from "../pages/Topping";

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
    if (currentPage === "Topping") {
      return <Topping />;
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
