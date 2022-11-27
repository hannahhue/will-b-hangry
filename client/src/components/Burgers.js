import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
    console.log('i am called');
    dispatch(addToCart(burger));
  };

  const handleAddToppings = (burger) => {
    dispatch(addToWish(burger));
    handlePageChange('Products');
  };

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
