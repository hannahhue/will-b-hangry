import React, { useEffect } from 'react';

// to use global state
import { useDispatch, useSelector } from 'react-redux';
// to reducer function to modify global state
import {
  toggleCart,
  addBurgerToCart,
  updateBurger,
  updateTopping,
} from '../utils/shopSlice';

//graphQL
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_BURGERS, QUERY_TOPPINGS } from '../utils/queries';

export default function Test() {
  //get global state
  const state = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  console.log(state);

  //destruct from global state
  const { cartOpen, burgers } = state;
  console.log(cartOpen);

  //get burger data from DB and rename as burgerData
  const { data: burgerData } = useQuery(QUERY_BURGERS);
  const { data: toppingData } = useQuery(QUERY_TOPPINGS);

  // use the useEffect hook to update the global state
  //example 1:
  useEffect(() => {
    if (burgerData) {
      dispatch(updateBurger(burgerData));
    }
  }, [dispatch, burgerData]);
  // example 2:
  useEffect(() => {
    if (toppingData) {
      dispatch(updateTopping(toppingData));
    }
  }, [dispatch, toppingData]);

  console.log(burgers);

  function handleClick() {
    dispatch(toggleCart());
  }

  return (
    <div>
      <button onClick={handleClick}>change cartOpen</button>
    </div>
  );
}
