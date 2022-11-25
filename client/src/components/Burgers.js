import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_BURGERS } from '../utils/queries';

export default function Burgers({ currentPage, handlePageChange }) {
  const { loading, data } = useQuery(QUERY_BURGERS);

  const [burgers, setBurger] = useState([]);
  useEffect(() => {
    if (data) {
      setBurger(data.burgers);
    }
  }, [data]);

  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : (
        burgers.map((burgers) => (
          <div className="card">
            <div className="imgBox">
              <img className="food" src={burgers.image} alt="burg" />
            </div>

            <div className="contentBox">
              <h3>{burgers.name}</h3>
              <h2 className="price">
                <small>{burgers.price}</small>
              </h2>
              <a
                className="buy"
                href="#cart"
                onClick={() => handlePageChange('Cart')}
              >
                Add To Cart
              </a>
              <a href="#" className="buy">
                Toppings
              </a>
            </div>
          </div>
        ))
      )}
    </>
  );
}