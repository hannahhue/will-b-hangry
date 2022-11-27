import React, { useEffect } from 'react';
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
import Test2 from './Test2';

export default function Home({ currentPage, handlePageChange }) {
  //get global state
  const state = useSelector((state) => state.shop);
  const { cartOpen, burgers, toppings, cart, drinks, fries } = state;
  //get data from db
  const { data: burgerData } = useQuery(QUERY_BURGERS);
  // const { data: toppingData } = useQuery(QUERY_TOPPINGS);
  // const { data: drinkData } = useQuery(QUERY_DRINKS);
  // const { data: fryData } = useQuery(QUERY_FRY);

  const dispatch = useDispatch();
  // use the useEffect hook to update the global state of burger data
  useEffect(() => {
    if (burgerData) {
      dispatch(updateBurger(burgerData));
    }
  }, [dispatch, burgerData]);
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
          <h3 className="card-title">Since 1990</h3>
          <p className="card-text">
            Wills opened on Thanksgiving Day 1990. Chef / Owner Will Silver
            began frying burgers and selling them to restaurants and his
            neighbors out of a small kitchen. Today, the beloved restaurant and
            burger shop celebrates 27 years of classic, made from scratch
            cooking.
          </p>
        </div>
      </div>
    </main>
  );
}
