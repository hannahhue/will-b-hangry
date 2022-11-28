// import
import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import Burgers from "../components/Burgers";
import restaurant from '../images/wbh.jpg';

import {
  QUERY_BURGERS,
  QUERY_TOPPINGS,
  QUERY_DRINKS,
  QUERY_FRY,
} from "../utils/queries";

// to reducer function to modify global state
import {
  updateDrink,
  addToCart,
  updateBurger,
  updateTopping,
  updateFry,
} from "../utils/shopSlice";

// function to access global state
import { useDispatch, useSelector } from "react-redux";
import Test2 from "./Test2";

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
          <h3 className="card-title">Since 2022</h3>
          <p className="card-text">
            <span>Will Be Hangry</span> was created by developers- Will, Ben,
            and Hannah who have a love for unpretentious, delicious, mouth
            watering burgers. Today, we built a modern burger restaurant with a
            retro feel, that serves up the classics. Burgers, Fries, and Shakes!
            <br></br>
            From a small hole in a wall restaurant we been pumping out big
            flavours that our customers love and come by the droves for. In
            order to provide the best service for our customers we made this web
            application, where you are able to place pick up orders in an effort to
            avoid the long wait times, this is because every burger is made fresh when
            ordered! We kill, ground and flavour the cow as soon you click submit.
          </p>
          <img src={restaurant} alt="inside restaurant"></img>
        </div>
      </div>
    </main>
  );
}
