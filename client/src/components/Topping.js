import React, { useState, useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { AwesomeButton } from 'react-awesome-button';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { QUERY_BURGERS, QUERY_TOPPINGS } from '../utils/queries';
import Combo from '../pages/Combo';
import { addToCart, updateBurger, updateTopping } from '../utils/shopSlice';
import '../styles/product.css';
import 'react-awesome-button/dist/styles.css';
import { Link } from 'react-router-dom';
const Topping = (props) => {
  const { data: burgerData, loading } = useQuery(QUERY_BURGERS);
  const { data: toppingData, loading: toppingLoading } =
    useQuery(QUERY_TOPPINGS);

  console.log(loading);
  console.log(burgerData);
  console.log(toppingLoading);
  console.log(toppingData);

  const state = useSelector((state) => state.shop);

  const dispatch = useDispatch();

  const [burger, setCurrentBurger] = useState({});
  const [selectedToppings, setToppings] = useState([]);
  const [comboPage, toggleComboPage] = useState(false);

  const { burgerId } = useParams();

  let section1 = [];
  let section2 = [];

  useEffect(() => {
    if (state.burgers.length) {
      console.log(state.burgers);
      setCurrentBurger(
        state.burgers.filter((burger) => burger._id === burgerId)[0]
      );
    } else if (burgerData) {
      dispatch(updateBurger(burgerData));
      console.log(state.burgers);
      setCurrentBurger(
        state.burgers.filter((burger) => burger._id === burgerId)[0]
      );
    }
  }, [dispatch, burgerData, state.burgers, burgerId, loading]);

  function handleSelectToppings(e, choice) {
    if (e.target.checked) {
      setToppings([...selectedToppings, choice]);
    } else {
      const newSelect = selectedToppings.filter(
        (topping) => topping._id !== choice._id
      );
      setToppings([...newSelect]);
    }
  }

  function handleAddToCart() {
    const newItem = {
      burgers: [burger],
      toppings: selectedToppings,
    };
    dispatch(addToCart(newItem));
  }

  if (toppingData) {
    for (let i = 0; i < 4; i++) {
      section1.push(
        <div
          key={toppingData.toppings[i]._id}
          className="topping-options col-sm-4"
        >
          <input
            type="checkbox"
            id="onion"
            name="onion"
            className="checkbox"
            onChange={(e) => handleSelectToppings(e, toppingData.toppings[i])}
          />
          <label htmlFor="onion">{toppingData.toppings[i].name}</label>
        </div>
      );
    }
    for (let i = 4; i < 8; i++) {
      section2.push(
        <div
          key={toppingData.toppings[i]._id}
          className="topping-options col-sm-4"
        >
          <input
            type="checkbox"
            id="onion"
            name="onion"
            className="checkbox"
            onChange={(e) => handleSelectToppings(e, toppingData.toppings[i])}
          />
          <label htmlFor="onion">{toppingData.toppings[i].name}</label>
        </div>
      );
    }
  }

  console.log(burger);
  console.log(selectedToppings);

  return loading || toppingLoading ? (
    <>loading</>
  ) : (
    <>
      <div className="product-container">
        <div className="left">
          <div className="card">
            <div className="imgBox">
              <img
                className="food"
                src={`/images/${burger.image}`}
                alt="burg"
              />
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
              {section1}
              {/*<div className="topping-options col-sm-4">
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
              </div> */}
            </div>

            <div className="product-row">
              {section2}
              {/* <div className="topping-options col-sm-4">
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
              </div> */}
            </div>
          </div>

          <div className="product-button">
            <AwesomeButton
              type="primary"
              className="button-one"
              href="#makeItCombo"
              onPress={() => toggleComboPage((pre) => !pre)}
            >
              Make A Combo
            </AwesomeButton>

            <AwesomeButton
              type="primary"
              className="button-two"
              onPress={handleAddToCart}
            >
              <Link to={'/cart'}>Add To Cart</Link>
            </AwesomeButton>
          </div>
        </div>
      </div>
      {comboPage ? (
        <div id="makeItCombo">
          <Combo burger={burger} selectedToppings={selectedToppings} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Topping;
