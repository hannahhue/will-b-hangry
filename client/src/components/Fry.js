import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Fry.css";

export default function Fry({ currentPage, handlePageChange }) {
  const state = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  console.log(state);

  return (
    <div className="fry-main">
      {state.fries.map((fry) => (
        <div className="card-container1">
          <div className="card" key={fry._id}>
            <div className="imgBox">
              <img className="food" src={`/images/${fry.image}`} alt="fry" />
            </div>

            <div className="contentBox">
              <h3>{fry.name}</h3>
              <h2 className="price">
                <small>{fry.price}</small>
              </h2>
              <a
                className="buy"
                href="#cart"
                onClick={() => handlePageChange("Cart")}
              >
                Select
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
