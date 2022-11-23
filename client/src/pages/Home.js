import React from "react";
import burgImg from "../images/burg.png";
import { useQuery } from "@apollo/client";

export default function Home() {
  return (
    <main>
      {/* title / sign */}
      <div className="title">
        <div className="neon">Will B</div>
        <div className="flux">Hangry</div>
      </div>

      {/* view product cards */}
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
    </main>
  );
}
