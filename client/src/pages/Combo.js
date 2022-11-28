//import
import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import Fry from '../components/Fry';
import Drink from '../components/Drink';
import '../styles/combo.css';
import { AwesomeButton } from 'react-awesome-button';
import { QUERY_DRINKS, QUERY_FRY } from '../utils/queries';

// import 'react-awesome-button/dist/styles.css';
import {
  updateDrink,
  addToCart,
  updateBurger,
  updateTopping,
  updateFry,
} from '../utils/shopSlice';

//call data from global state
export default function Combo({ burger, selectedToppings }) {
  const { data: drinksData, loading } = useQuery(QUERY_DRINKS);
  const { data: friesData } = useQuery(QUERY_FRY);

  const state = useSelector((state) => state.shop);

  const dispatch = useDispatch();

  const [drinks, setDrinks] = useState([]);
  const [fries, setFries] = useState([]);
  const [selectedFry, setSelectedFry] = useState([]);

  // per drink show
  useEffect(() => {
    if (state.drinks.length) {
      console.log(state.drinks);
      setDrinks(state.drinks);
    }
    if (drinksData) {
      dispatch(updateDrink(drinksData));
    }

    if (state.fries.length) {
      console.log(state.fries);
      setFries(state.fries);
    }

    if (friesData) {
      dispatch(updateFry(friesData));
    }
  }, [dispatch, drinksData, state.drinks, loading, friesData, state.fries]);
  console.log(selectedToppings);

  // render html
  return (
    <main>
      <div className="logo">
        <b>
          Cust<span>omize</span> <span>Me</span>al
        </b>
      </div>
      <div className="row">
        <Fry
          fries={fries}
          selectedFry={selectedFry}
          setSelectedFry={setSelectedFry}
        />
      </div>
      <div className="row">
        <Drink
          drinks={drinks}
          selectedFry={selectedFry}
          burger={burger}
          selectedToppings={selectedToppings}
        />
      </div>
    </main>
  );
}
