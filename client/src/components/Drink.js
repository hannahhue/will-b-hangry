import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/Drink.css';

export default function Drink({ currentPage, handlePageChange }) {
  const state = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  console.log(state);

  return (
    <div className="drink-main">
      {state.drinks.map((drink) => (
        <div className="card-container2">
          <div className="card" key={drink._id}>
            <div className="imgBox">
              <img
                className="food"
                src={`/images/${drink.image}`}
                alt="drink"
              />
            </div>

            <div className="contentBox">
              <h3>{drink.name}</h3>
              <h2 className="price">
                <small>{drink.price}</small>
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
        </div>
      ))}
    </div>
  );
}
