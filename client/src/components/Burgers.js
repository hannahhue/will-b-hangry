import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart, addToWish } from '../utils/shopSlice';
export default function Burgers({ currentPage, handlePageChange }) {
  // const { loading, data } = useQuery(QUERY_BURGERS);
  const state = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  // const [burgers, setBurger] = useState([]);

  // useEffect(() => {
  //   if (data) {
  //     setBurger(data.burgers);
  //   }
  // }, [data]);

  const handleAddToCart = (burger) => {
    dispatch(addToCart(burger));
    handlePageChange('Cart');
  };

  const handleAddToppings = (burger) => {
    dispatch(addToWish(burger));
    handlePageChange('Products');
  };

  return (
    <>
      {state.burgers.map((burgers) => (
        <div className="card" key={burgers._id}>
          <div className="imgBox">
            <img className="food" src={`/images/${burgers.image}`} alt="burg" />
          </div>

          <div className="contentBox">
            <h3>{burgers.name}</h3>
            <h2 className="price">
              <small>{burgers.price}</small>
            </h2>
            <a
              className="buy"
              href="#cart"
              onClick={() => handleAddToCart(burgers)}
            >
              Add To Cart
            </a>
            <a
              href="#topping"
              className="buy"
              onClick={() => handleAddToppings(burgers)}
            >
              Toppings
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
