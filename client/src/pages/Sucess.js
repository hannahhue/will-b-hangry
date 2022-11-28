import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';

function Success() {
  // const [addOrder] = useMutation(ADD_ORDER);

  // useEffect(() => {
  //   async function saveOrder() {

  setTimeout(() => {
    window.location.assign('/');
  }, 3000);
  // }

  //   saveOrder();
  // }, [addOrder]);

  return (
    <div className="wrapper-success">
      <div className="success-card">
        <div className="icon">
          <i className="fas fa-check-circle"></i>
        </div>
        <div className="subject">
          <h3>Success</h3>
          <p>Your order has been placed and will be ready for pickup soon!</p>
        </div>
        <div className="icon-times">
          <i className="fas fa-times"></i>
        </div>
      </div>
    </div>
  );
}

export default Success;
