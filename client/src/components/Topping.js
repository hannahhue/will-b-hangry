import React, { useState, useEffect } from 'react';

import { useQuery } from '@apollo/client';
// import { AwesomeButton } from 'react-awesome-button';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { QUERY_BURGERS, QUERY_TOPPINGS } from '../utils/queries';
import Combo from '../pages/Combo';
import { addToCart, updateBurger, updateTopping } from '../utils/shopSlice';
import '../styles/product.css';
// import 'react-awesome-button/dist/styles.css';
import { Link } from 'react-router-dom';

const Topping = (props) => {
  const { data: burgerData, loading } = useQuery(QUERY_BURGERS);
  const { data: toppingData, loading: toppingLoading } =
    useQuery(QUERY_TOPPINGS);

  const state = useSelector((state) => state.shop);

  const dispatch = useDispatch();

  const [burger, setCurrentBurger] = useState({});
  const [selectedToppings, setToppings] = useState([]);
  const [comboPage, toggleComboPage] = useState(false);

  const { burgerId } = useParams();

  let section1 = [];
  // let section2 = [];

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

  useEffect(() => {
    if (toppingData) {
      dispatch(updateTopping(toppingData));
    }
  }, [toppingData, dispatch]);

  function handleSelectToppings(e, choice) {
    if (e.target.checked) {
      setToppings([...selectedToppings, choice]);
      console.log(selectedToppings);
    } else {
      const newSelect = selectedToppings.filter(
        (topping) => topping._id !== choice._id
      );
      setToppings([...newSelect]);
      console.log(selectedToppings);
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
    for (let i = 0; i < 8; i++) {
      section1.push(
        <div key={toppingData.toppings[i]._id} className="topping-options">
          <input
            type="checkbox"
            id="onion"
            name="onion"
            className="checkbox"
            onChange={(e) => handleSelectToppings(e, toppingData.toppings[i])}
          />
          <label className="sub" htmlFor="onion">
            {toppingData.toppings[i].name}
          </label>
        </div>
      );
    }
  }

  return loading || toppingLoading ? (
    <>loading</>
  ) : (
    <>
      {/* sign text */}
      <div className="logo">
        <b>
          To<span>p</span>
          <span>pin</span>gs
        </b>
      </div>
      <div className="product-container">
        <div className="top">
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
          
            <div className="topping-item">
              <div className="product-row">{section1}</div>
            </div>
          </div>
        </div>
        <div className="container-button">
          <button
            className="button-one"
            onClick={() => toggleComboPage((pre) => !pre)}
          >
            <a href="#makeItCombo">make It Combo</a>
          </button>

          <button
            className="button-two"
            role="button"
            type="primary"
            onClick={handleAddToCart}
          >
            <Link className="txt" to={'/cart'}>
              Add To Cart
            </Link>
          </button>
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
