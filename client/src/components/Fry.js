// import
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/Fry.css';

//grab choice and push to cart
export default function Fry({ fries, selectedFry, setSelectedFry }) {
  function handleCheckbox(choice, e) {
    if (e.target.checked) {
      setSelectedFry([...selectedFry, choice]);
    } else {
      const newSelect = selectedFry.filter((fry) => fry._id !== choice._id);
      setSelectedFry([...newSelect]);
    }
    setCheckbox((current) => !current);
  }
  console.log(selectedFry);
  const [checkBoxStatus, setCheckbox] = useState(false);

  // render html
  return (
    <div className="fry-main">
      {fries.map((fry) => (
        <div className="card-container1" key={fry._id}>
          <div className="card">
            <div className="imgBox">
              <img className="food" src={`/images/${fry.image}`} alt="fry" />
            </div>

            <div className="contentBox">
              <h3>{fry.name}</h3>
              <h2 className="price">
                <small>{fry.price}</small>
              </h2>
              <input
                id={`${fry._id}`}
                type="checkbox"
                className="buy"
                value={checkBoxStatus}
                onChange={(e) => handleCheckbox(fry, e)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
