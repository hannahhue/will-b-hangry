import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { idbPromise } from '../utils/helpers';
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
    // idbPromise('cart', 'delete', { ...item });
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch(
        removeFromCart({
          _id: item._id,
        })
      );
      // idbPromise('cart', 'delete', { ...item });
    }
  };

  return (
    <>
      {item.burgers ? (
        item.burgers.map((burger) => (
          <tr key={burger._id}>
            <td>
              <a onClick={() => handleRemoveFromCart(burger)}>🗑️</a>
            </td>
            <td>{burger.name}</td>
            <td className="right">{burger.price}</td>
          </tr>
        ))
      ) : (
        <></>
      )}
      {item.fries ? (
        item.fries.map((fry) => {
          <tr key={fry._id}>
            <td>
              <a onClick={() => handleRemoveFromCart(fry)}>🗑️</a>
            </td>
            <td>{fry.name}</td>
            <td className="right">{fry.price}</td>
          </tr>;
        })
      ) : (
        <></>
      )}

      {item.drinks ? (
        item.drinks.map((drink) => {
          <tr key={drink._id}>
            <td>
              <a onClick={() => handleRemoveFromCart(drink)}>🗑️</a>
            </td>
            <td>{drink.name}</td>
            <td className="right">{drink.price}</td>
          </tr>;
        })
      ) : (
        <></>
      )}
    </>
  );
}
