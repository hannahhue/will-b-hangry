import React from 'react';
import burgImg from '../images/burg.png';
import { useQuery } from '@apollo/client';

export default function Home() {
  return (
    <main className="row">
      <div className="sign">
        {/* title / sign */}
        <div className="title">
          <div className="neon">Will B</div>
          <div className="flux">Hangry</div>
        </div>
      </div>
      {/* view product cards */}
      <div className="card">
        <div className="imgBox">
          <img className="food" src={burgImg} alt="burg" />
        </div>

        <div className="contentBox">
          <h3>bargar</h3>
          <h2 className="price">
            $6.<small>98</small>
          </h2>
          <a href="#" className="buy">
            Add To Cart
          </a>
          <a href="#" className="buy">
            Toppings
          </a>
        </div>
      </div>

      <div className="card">
        <div className="imgBox">
          <img className="food" src={burgImg} alt="burg" />
        </div>

        <div className="contentBox">
          <h3>bargar</h3>
          <h2 className="price">
            $6.<small>98</small>
          </h2>
          <a href="#" className="buy">
            Add To Cart
          </a>
          <a href="#" className="buy">
            Toppings
          </a>
        </div>
      </div>

      <div className="card">
        <div className="imgBox">
          <img className="food" src={burgImg} alt="burg" />
        </div>

        <div className="contentBox">
          <h3>bargar</h3>
          <h2 className="price">
            $6.<small>98</small>
          </h2>
          <a href="#" className="buy">
            Add To Cart
          </a>
          <a href="#" className="buy">
            Toppings
          </a>
        </div>
      </div>
    </main>
  );
}
