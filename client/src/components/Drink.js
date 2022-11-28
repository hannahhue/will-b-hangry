// import
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/Drink.css';
import { Link } from 'react-router-dom';
import { addToCart } from '../utils/shopSlice';

// grab drink and add to cart
export default function Drink({
  burger,
  drinks,
  selectedFry,
  selectedToppings,
}) {
  const state = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  const handleAddToCart = (drink) => {
    const newItem = {
      burgers: [burger],
      toppings: [selectedToppings],
      drinks: [drink],
      fries: [...selectedFry],
    };

    dispatch(addToCart(newItem));
  };

  // render html per card
  return (
    <div className="drink-main">
      {drinks.map((drink) => (
        <div className="card-container2" key={drink._id}>
          <div className="card">
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
              <Link
                to={'/cart'}
                className="buy"
                onClick={() => handleAddToCart(drink)}
              >
                Add To Cart
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
