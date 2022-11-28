import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <div class="wrapper-success">
      <div class="success-card">
        <div class="icon">
          <i class="fas fa-check-circle"></i>
        </div>
        <div class="subject">
          <h3>Success</h3>
          <p>Your order has been placed and will be ready for pickup soon!</p>
        </div>
        <div class="icon-times">
          <i class="fas fa-times"></i>
        </div>
      </div>
    </div>
  );
}

export default Success;
