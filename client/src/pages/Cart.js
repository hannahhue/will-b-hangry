import React from 'react';
import burgImg from '../images/burg.png';
import { useQuery } from '@apollo/client';

export default function Cart() {
  return (
    <main>
      {/* sign text */}
      <div class="logo">
        <b>
          La<span>st</span> <span>Chan</span>ce
        </b>
      </div>

      {/* recc cards */}
      <div className="row crt">
        <div class="card">
          <div class="imgBox">
            <img class="food" src={burgImg} alt="burg" />
          </div>

          <div class="contentBox">
            <h3>bargar</h3>
            <h2 class="price">
              $6.<small>98</small>
            </h2>
            <a href="#" class="buy">
              Add To Cart
            </a>
            <a href="#" class="buy">
              Toppings
            </a>
          </div>
        </div>

        <div class="card">
          <div class="imgBox">
            <img class="food" src={burgImg} alt="burg" />
          </div>

          <div class="contentBox">
            <h3>bargar</h3>
            <h2 class="price">
              $6.<small>98</small>
            </h2>
            <a href="#" class="buy">
              Add To Cart
            </a>
            <a href="#" class="buy">
              Toppings
            </a>
          </div>
        </div>
      </div>
      {/* order sum */}
      <div></div>
    </main>
  );
}
