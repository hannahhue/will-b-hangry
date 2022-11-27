import React, { useState, useEffect } from 'react';

import { useQuery } from '@apollo/client';
import '../product.css';
import { AwesomeButton } from 'react-awesome-button';
// import 'react-awesome-button/dist/styles.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { QUERY_BURGERS, QUERY_TOPPINGS } from '../utils/queries';

import {
  updateDrink,
  addToCart,
  updateBurger,
  updateTopping,
  updateFry,
} from '../utils/shopSlice';

const Products = (props) => {
  const { data: burgerData, loading } = useQuery(QUERY_BURGERS);
  const { data: toppingData } = useQuery(QUERY_TOPPINGS);

  const dispatch = useDispatch();

  useEffect(() => {
    if (burgerData) {
      dispatch(updateBurger(burgerData));
    }
    if (toppingData) {
      dispatch(updateTopping(toppingData));
    }
  }, [dispatch, burgerData, toppingData]);

  const state = useSelector((state) => state.shop);
  // const [amount, setAmount] = useState(0);

  const { burgerId } = useParams();
  console.log(state.burgers);

  let burger;
  if (state.burgers) {
    burger = state.burgers.filter((burger) => burger._id === burgerId);
  }

  console.log(burgerId);
  console.log(burger);

  const toppings = state.toppings;

  return loading ? (
    <>loading</>
  ) : (
    <div className="product-container">
      <div className="left">
        <div className="card">
          <div className="imgBox">
            <img className="food" src={`/images/${burger.image}`} alt="burg" />
          </div>
          <div className="contentBox">
            <h3>{burger.name}</h3>
            <h2 className="price">{burger.price}</h2>
            <h3>{burger.description}</h3>
          </div>
        </div>
      </div>
      <div className="right">
        <h3 className="title-topping"> Choose your toppings</h3>
        <div className="topping-item">
          <div className="product-row">
            <div className="topping-options col-sm-4">
              <input
                type="checkbox"
                id="onion"
                name="onion"
                className="checkbox"
              />
              <label htmlFor="onion">Onion</label>
            </div>
            <div className="topping-options col-sm-4">
              <input
                type="checkbox"
                id="lettuce"
                name="lettuce"
                className="checkbox"
              />
              <label htmlFor="lettuce">Lettuce</label>
            </div>
            <div className="topping-options col-sm-4">
              <input
                type="checkbox"
                id="tomato"
                name="tomato"
                className="checkbox"
              />
              <label htmlFor="tomato">Tomato</label>
            </div>
            <div className="topping-options col-sm-4">
              <input
                type="checkbox"
                id="pickles"
                name="pickles"
                className="checkbox"
              />
              <label htmlFor="pickles">Pickles</label>
            </div>
          </div>

          <div className="product-row">
            <div className="topping-options col-sm-4">
              <input
                type="checkbox"
                id="ketchup"
                name="ketchup"
                className="checkbox"
              />
              <label htmlFor="ketchup">Ketchup</label>
            </div>
            <div className="topping-options col-sm-4">
              <input
                type="checkbox"
                id="mustard"
                name="mustard"
                className="checkbox"
              />
              <label htmlFor="mustard">Mustard</label>
            </div>
            <div className="topping-options  col-sm-4">
              <input
                type="checkbox"
                id="mayo"
                name="mayo"
                className="checkbox"
              />
              <label htmlFor="mayo">Mayo</label>
            </div>
            <div className="topping-options col-sm-4">
              <input
                type="checkbox"
                id="cheese"
                name="cheese"
                className="checkbox"
              />
              <label htmlFor="cheese">Cheese</label>
            </div>
          </div>
        </div>
        <div className="product-button">
          <AwesomeButton type="primary" className="button-one">
            Make A Combo
          </AwesomeButton>
          <AwesomeButton type="primary" className="button-two">
            Add To Cart
          </AwesomeButton>
        </div>
      </div>
    </div>
  );
};

export default Products;
