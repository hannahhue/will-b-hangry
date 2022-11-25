import React, { useEffect } from 'react';
import burgImg from '../images/burg.png';
import { useQuery } from '@apollo/client';
import Burgers from '../components/Burgers';

import {
  QUERY_BURGERS,
  QUERY_TOPPINGS,
  QUERY_DRINKS,
  QUERY_FRY,
} from '../utils/queries';

// to reducer function to modify global state
import {
  updateDrink,
  addToCart,
  updateBurger,
  updateTopping,
  updateFry,
} from '../utils/shopSlice';

// function to access global state
import { useDispatch, useSelector } from 'react-redux';

export default function Home({ currentPage, handlePageChange }) {
  //get global state
  const state = useSelector((state) => state.shop);
  const { cartOpen, burgers, toppings, cart, drinks, fries } = state;
  //get data from db
  const { data: burgerData } = useQuery(QUERY_BURGERS);
  const { data: toppingData } = useQuery(QUERY_TOPPINGS);
  const { data: drinkData } = useQuery(QUERY_DRINKS);
  const { data: fryData } = useQuery(QUERY_FRY);

  const dispatch = useDispatch();
  // use the useEffect hook to update the global state of burger data
  useEffect(() => {
    if (burgerData) {
      dispatch(updateBurger(burgerData));
    }
    if (toppingData) {
      dispatch(updateTopping(toppingData));
    }
    if (drinkData) {
      dispatch(updateDrink(drinkData));
    }
    if (fryData) {
      dispatch(updateFry(fryData));
    }
  }, [dispatch, burgerData, toppingData, drinkData, fryData]);
  console.log(state);

  return (
    <main>
      <div className="sign">
        {/* title / sign */}
        <div className="title">
          <div className="neon">Will B</div>
          <div className="flux">Hangry</div>
        </div>
      </div>
      {/* view product cards */}
      <div className="row">
        <Burgers
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>

      {/* about us */}
      <div className="about">
        <h1>About Us</h1>
      </div>
      <div className="about-card">
        <div className="card-body">
          <h3 className="card-title">Card title</h3>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </main>
  );
}
