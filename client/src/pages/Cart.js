import React, { useEffect } from 'react';
import Burgers from '../components/Burgers';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import Auth from '../utils/auth';
import { QUERY_CHECKOUT } from '../utils/queries';
import { useLazyQuery } from '@apollo/client';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

export default function Cart({ currentPage, handlePageChange }) {
  const state = useSelector((state) => state.shop);
  const { cart } = state;
  console.log(cart);

  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  // function calculateTotal() {
  //   let sum = 0;
  //   state.combo.forEach((item) => {
  //     sum += item.price * item.purchaseQuantity;
  //   });
  //   return sum.toFixed(2);
  // }

  /*
  cart: {
      combo: [

        { burgers: [{id:.., name:'burger1',price:10,}]
          topping: [{},{},{}],
          fries: [{}],
          drinks: [],
        },

        { burgers:[ name:'burger1',price:10,]
          topping: [name:xxx... ],
          fries: [name:xxx...],
          drinks: [name:xxx...],
        },
      ],
    }
  */

  function submitCheckout() {
    const newCombo = [
      {
        burgers: [state.cart.combo.burgers[0]._id],
        toppings: [
          state.cart.combo.toppings[0]._id,
          state.cart.combo.toppings[1]._id,
        ],
        fries: [state.cart.combo.fries[0]._id],
        drinks: [state.cart.combo.drinks[0]._id],
      },
    ];

    // state.cart.combo.forEach((item) => {
    // for (const iterator of item) {

    //   newCombo.push(Object.keys(item[iterator])
    //     .filter((key) => key.includes('_id'))
    //     .reduce((cur, key) => {
    //       return Object.assign(cur, { [key]: item[iterator][key] });
    //     }, {}))

    // }

    console.log(newCombo);
    getCheckout({
      variables: { combo: newCombo },
    });
  }

  /*
  cart: {
      combo: [

        { burgers: [{id:.., name:'burger1',price:10,}]
          topping: [{},{},{}],
          fries: [{}],
          drinks: [],
        },

        { burgers:[ name:'burger1',price:10,]
          topping: [name:xxx... ],
          fries: [name:xxx...],
          drinks: [name:xxx...],
        },
      ],
    }
  */

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
                  <a className="thankyou" onClick={submitCheckout}>
                    Checkout
                  </a>
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
