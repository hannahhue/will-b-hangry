import React from 'react';
import Burgers from '../components/Burgers';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import Auth from '../utils/auth';

export default function Cart({ currentPage, handlePageChange }) {
  const state = useSelector((state) => state.shop);
  const { cart } = state;
  console.log(cart);

  // function calculateTotal() {
  //   let sum = 0;
  //   state.combo.forEach((item) => {
  //     sum += item.price * item.purchaseQuantity;
  //   });
  //   return sum.toFixed(2);
  // }

  // function submitCheckout() {
  //   const productIds = [];

  //   state.cart.forEach((item) => {
  //     for (let i = 0; i < item.purchaseQuantity; i++) {
  //       productIds.push(item._id);
  //     }
  //   });

  //   getCheckout({
  //     variables: { products: productIds },
  //   });
  // }

  function findSum() {
    let sum = 0;
    for (let i = 0; i < state.cart.combo.length; i++) {
      sum += i.price;
      console.log(sum);
    }
    console.log(sum);
    return sum;
  }

  // const getTotalPrice = (items) =>
  //   items.map((item) => item.price).reduce((acc, value) => acc + value, 0);

  // const result = getTotal(cart);

  // console.log({ result });

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
                  {state.cart.combo.map((item) => (
                    <CartItem key={item.burgers[0]._id} item={item} />
                  ))}
                </tbody>
              </table>
              <div className="bar center">
                <div className="barcode"></div>
                <br />
                Total: ${findSum()}
                <br />
                {Auth.loggedIn() ? (
                  <a className="thankyou">Checkout</a>
                ) : (
                  <span>(log in to check out)</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
