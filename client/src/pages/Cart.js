// import
import React, { useEffect } from 'react';
import Burgers from '../components/Burgers';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import Auth from '../utils/auth';
import { QUERY_CHECKOUT } from '../utils/queries';
import { useLazyQuery } from '@apollo/client';
import { loadStripe } from '@stripe/stripe-js';

// api key
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

// cart grab from global state
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

  // grab data
  function submitCheckout() {
    // const newCombo = [
    //   {
    //     burgers: [state.cart.combo[0].burgers[0]._id],
    //     toppings: [
    //       state.cart.combo[0].toppings[0]._id,
    //       state.cart.combo[0].toppings[1]._id,
    //     ],
    //     fries: [state.cart.combo[0].fries[0]._id],
    //     drinks: [state.cart.combo[0].drinks[0]._id],
    //   },
    // ];

    const prepCombo = [];

    cart.combo.forEach((meal) => {
      let burgersId = [];
      console.log(meal);
      if (meal.burgers) {
        meal.burgers.forEach((item) => {
          // for (let i = 0; i < item.length; i++) {
          burgersId.push(item._id);
          // }
        });
      }

      let toppingsId = [];
      if (meal.toppings) {
        meal.toppings.forEach((item) => {
          toppingsId.push(item._id);
        });
      }

      let friesId = [];
      if (meal.fries) {
        meal.fries.forEach((item) => {
          friesId.push(item._id);
        });
      }

      let drinksId = [];
      if (meal.drinks) {
        meal.drinks.forEach((item) => {
          drinksId.push(item._id);
        });
      }

      console.log(burgersId);
      console.log(toppingsId);

      const Combo1 = {
        burgers: burgersId,
        toppings: toppingsId,
        fries: friesId,
        drinks: drinksId,
      };

      prepCombo.push(Combo1);
    });

    console.log(prepCombo);
    getCheckout({
      variables: { combo: prepCombo },
    });
  }

  // add prices together for total sum
  function findSum() {
    let sum = 0;

    for (let i = 0; i < state.cart.combo.length; i++) {
      if (state.cart.combo[i].burgers && state.cart.combo[i].burgers.length) {
        sum += state.cart.combo[i].burgers[0].price;
        console.log(sum);
      }
      if (state.cart.combo[i].toppings && state.cart.combo[i].toppings.length) {
        for (let j = 0; j < state.cart.combo[i].toppings.length; j++) {
          sum += state.cart.combo[i].toppings[j].price;
          console.log(sum);
        }
      }
      if (state.cart.combo[i].fries && state.cart.combo[i].fries.length) {
        for (let j = 0; j < state.cart.combo[i].fries.length; j++) {
          sum += state.cart.combo[i].fries[j].price;
          console.log(sum);
        }
      }
      if (state.cart.combo[i].drinks && state.cart.combo[i].drinks.length) {
        sum += state.cart.combo[i].drinks[0].price;
        console.log(sum);
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
