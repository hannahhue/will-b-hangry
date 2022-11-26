import React from 'react';
import { useDispatch } from 'react-redux';

import { idbPromise } from '../utils/helpers';
import { removeFromCart } from '../utils/shopSlice';

export default function CartItem({ item }) {
  const state = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(
      removeFromCart({
        _id: item._id,
      })
    );
    idbPromise('cart', 'delete', { ...item });
  };

  // const onChange = (e) => {
  //   const value = e.target.value;
  //   if (value === '0') {
  //     dispatch(
  //       removeFromCart({
  //         _id: item._id,
  //       })
  //     );
  //     idbPromise('cart', 'delete', { ...item });
  //   }
  // };

  return (
    <>
      {state.cart.combo.map(
        (item) => (
          item.burgers ? (
            <tr key={item.burgers._id}>
              <td>
                <a onClick={() => handleRemoveFromCart(item)}>🗑️</a>
              </td>
              <td>{item.burgers.name}</td>
              <td class="right">{item.burgers.price}</td>
            </tr>
          ) : null,
          item.fries ? (
            <tr key={item.fries._id}>
              <td>
                <a onClick={() => handleRemoveFromCart(item)}>🗑️</a>
              </td>
              <td>{item.fries.name}</td>
              <td class="right">{item.fries.price}</td>
            </tr>
          ) : null,
          item.drinks ? (
            <tr key={item.drinks._id}>
              <td>
                <a onClick={() => handleRemoveFromCart(item)}>🗑️</a>
              </td>
              <td>{item.drinks.name}</td>
              <td class="right">{item.drinks.price}</td>
            </tr>
          ) : null
        )
      )}
    </>
  );
}
