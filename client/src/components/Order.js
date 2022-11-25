import React, { useState, useEffect } from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

export default function Burgers({ currentPage, handlePageChange }) {
  const { loading, data } = useQuery(QUERY_USER);

  const [items, setItems] = useState([]);
  useEffect(() => {
    if (data) {
      setItems(data.items);
    }
  }, [data]);

  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : (
        items.map(
          (items) =>
            items.burgers ? (
              <tr>
                <td>
                  <a>🗑️</a>
                </td>
                <td>{items.burgers.name}</td>
                <td class="right">{items.burgers.price}</td>
              </tr>
            ) : null,
          items.fries ? (
            <tr>
              <td>
                <a>🗑️</a>
              </td>
              <td>{items.fries.name}</td>
              <td class="right">{items.fries.price}</td>
            </tr>
          ) : null,
          items.drinks ? (
            <tr>
              <td>
                <a>🗑️</a>
              </td>
              <td>{items.drinks.name}</td>
              <td class="right">{items.drinks.price}</td>
            </tr>
          ) : null,
          items.toppings ? (
            <tr>
              <td>
                <a>🗑️</a>
              </td>
              <td>{items.toppings.name}</td>
              <td class="right">{items.toppings.price}</td>
            </tr>
          ) : null
        )
      )}
    </>
  );
}
