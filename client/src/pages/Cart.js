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
        burgers: [state.cart.combo[0].burgers[0]._id],
        toppings: [
          state.cart.combo[0].toppings[0]._id,
          state.cart.combo[0].toppings[1]._id,
        ],
        // fries: [state.cart.combo[0].fries[0]._id],
        // drinks: [state.cart.combo[0].drinks[0]._id],
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
      if (state.cart.combo[i].burgers && state.cart.combo[i].burgers.length) {
        sum += state.cart.combo[i].burgers[0].price;
      }
      if (state.cart.combo[i].toppings && state.cart.combo[i].toppings.length) {
        for (let j = 0; j < state.cart.combo[i].toppings.length; j++) {
          sum += state.cart.combo[i].toppings[j].price;
        }
      }
      if (state.cart.combo[i].fries && state.cart.combo[i].fries.length) {
        for (let j = 0; j < state.cart.combo[i].fries.length; j++) {
          sum += state.cart.combo[i].fries[j].price;
        }
      }
      if (state.cart.combo[i].drinks && state.cart.combo[i].drinks.length) {
        sum += state.cart.combo[i].drinks[0].price;
      }
    }
    console.log(sum);
    return sum.toFixed(2);
  }

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
                    <CartItem item={item} />
                  ))}
                </tbody>
              </table>
              <div className="bar center">
                <div className="barcode"></div>
                <br />
                <p>Total: ${findSum()}</p>
                <br />
                {Auth.loggedIn() ? (
                  <a className="thankyou" onClick={submitCheckout}>
                    Checkout
                  </a>
                ) : (
                  <span>Login to check out!</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
