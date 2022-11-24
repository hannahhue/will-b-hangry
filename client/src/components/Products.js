import React from "react";

export default function Products(props) {
  return (
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
  );
}
