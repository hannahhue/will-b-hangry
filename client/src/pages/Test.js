import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart, addBurgerToCart } from '../utils/shopSlice';
export default function Test() {
  const state = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  console.log(state);
  const { cartOpen } = state;
  console.log(cartOpen);

  function handleClick() {
    dispatch(toggleCart());
  }

  const grabUserInput = {
    name: 'Burger1',
    description:
      'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    image: 'https://foodish-api.herokuapp.com/images/burger/burger87.jpg',
    price: 9.99,
  };

  function handleAddBurger() {
    dispatch(addBurgerToCart(grabUserInput));
  }

  return (
    <div>
      <button onClick={handleClick}>change cartOpen</button>
      <button onClick={handleAddBurger}> add burger </button>
    </div>
  );
}
