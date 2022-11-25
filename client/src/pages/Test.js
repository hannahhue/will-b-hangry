import React, { useEffect } from 'react';

// to use global state
import { useDispatch, useSelector } from 'react-redux';
// to reducer function to modify global state
import {
  toggleCart,
  addToCart,
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
  const { cartOpen, burgers, toppings, cart } = state;
  console.log(cartOpen);

  //get burger data from DB and rename as burgerData
  const { data: burgerData } = useQuery(QUERY_BURGERS);
  const { data: toppingData } = useQuery(QUERY_TOPPINGS);

  // use the useEffect hook to update the global state of burger data
  useEffect(() => {
    if (burgerData) {
      dispatch(updateBurger(burgerData));
    }
  }, [dispatch, burgerData]);

  // use the useEffect hook to update the global state of topping data
  useEffect(() => {
    if (toppingData) {
      dispatch(updateTopping(toppingData));
    }
  }, [dispatch, toppingData]);

  //check the burgers data from global state
  console.log(burgers);
  //check the cart data from global state
  console.log(state.cart);

  let newItem;
  try {
    //testing data will be inserted to cart state
    newItem = { ...burgers[0], toppings: [toppings[0], toppings[2]] };
    console.log(newItem);
  } catch (error) {}

  return (
    <div>
      <button onClick={() => dispatch(addToCart(newItem))}>add item</button>
    </div>
  );
}
