import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useQuery } from '@apollo/client';
import { QUERY_FRY } from '../utils/queries';
import { addToCart, addToWish } from '../utils/shopSlice';
export default function Burgers({ currentPage, handlePageChange }) {
  const { loading, data } = useQuery(QUERY_FRY);
  const state = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  const [fry, setFry] = useState([]);

  useEffect(() => {
    if (data) {
      setFry(data.fry);
    }
  }, [data]);

  const handleAddToCart = (fry) => {
    dispatch(addToCart(fry));
    handlePageChange('Cart');
  };

  const handleAddToppings = (fry) => {
    dispatch(addToWish(fry));
    handlePageChange('Products');
  };

  return (
    <div>
    {state.fry.map((fry) => (
        <div className="card" key={fry._id}>
          <div className="imgBox">
            <img className="food" src={`/images/${fry.image}`} alt="fry" />
          </div>

          <div className="contentBox">
            <h3>{fry.name}</h3>
            <h2 className="price">
              <small>{fry.price}</small>
            </h2>
            <a
              className="buy"
              href="#cart"
              onClick={() => handlePageChange('Cart')}
            >
              Add To Cart
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
