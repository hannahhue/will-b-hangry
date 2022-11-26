import React from 'react';
import CartItem from '../components/CartItem';

import Burgers from '../components/Burgers';
import { useDispatch, useSelector } from 'react-redux';

export default function Cart({ currentPage, handlePageChange }) {
  const state = useSelector((state) => state.shop);
  const { cart } = state;
  console.log(cart);
  return (
    <main>
      {/* sign text */}
      <div className="logo">
        <b>
          La<span>st</span> <span>Chan</span>ce
        </b>
      </div>

      {/* recc cards */}
      <div className="row crt">
        <Burgers
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>

      {/* order sum sign */}
      <div className="logo">
        <b>
          Ord<span>er</span> <span>Sum</span>mary
        </b>
      </div>

      {/* order sum */}
      <div className="contain">
        <div className="container">
          <div className="tab"></div>
          <div className="receipt">
            <div className="paper">
              <div className="title">Cart</div>
              <table>
                <tbody>
                  <CartItem />
                </tbody>
              </table>
              <div className="bar center">
                <div className="barcode"></div>
                <br />
                0123456789
                <br />
                <a className="thankyou">Checkout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
