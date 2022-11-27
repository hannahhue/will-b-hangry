import React, { useState } from 'react';
import burgImg from '../images/burg.png';
import '../product.css';
import { AwesomeButton } from 'react-awesome-button';
// import 'react-awesome-button/dist/styles.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Products = (props) => {
  const state = useSelector((state) => state.shop);

  const [amount, setAmount] = useState(0);

  const { burgerId } = useParams();
  console.log(state.burgers);

  const burger = state.burgers.filter((burger) => burger._id === burgerId);
  console.log(burgerId);
  console.log(burger);

  const toppings = state.toppings;

  return (
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
