import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';

import { useQuery } from '@apollo/client';
import { QUERY_BURGERS } from '../utils/queries';
import Auth from '../utils/auth';
import { QUERY_CHECKOUT } from '../utils/queries';

export default function TestCheckout() {
  const { data, loading } = useQuery(QUERY_BURGERS);
  // let burgers;
  const [burgers, setBurger] = useState([]);
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      setBurger(data.burgers);
    }
  }, [data]);

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  console.log(burgers);
  return (
    <>
      <button>add to cart</button>
      <button>checkout</button>
    </>
  );
}
