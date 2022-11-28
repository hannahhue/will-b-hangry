// import
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { addToCart, addToWish } from '../utils/shopSlice';

// grab global
export default function Burgers({ currentPage, handlePageChange }) {
  const state = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  const handleAddToCart = (burger) => {
    dispatch(addToCart(burger));
  };

  // render html per burg card
  return (
    <>
      {state.burgers.map((burger) => (
        <div className="card" key={burger._id}>
          <div className="imgBox">
            <img className="food" src={`/images/${burger.image}`} alt="burg" />
          </div>

          <div className="contentBox">
            <h3>{burger.name}</h3>
            <h2 className="price">
              <small>{burger.price}</small>
            </h2>
            <Link
              to="/cart"
              className="buy"
              onClick={() => handleAddToCart({ burgers: [{ ...burger }] })}
            >
              Add To Cart
            </Link>
            <Link to={`/topping/${burger._id}`} className="buy">
              Toppings
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
