import React from 'react';
import Fry from '../components/Fry';
import Drink from '../components/Drink';
import '../styles/combo.css';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

export default function Combo({ currentPage, handlePageChange }) {
  return (
    <main>
      <div className="combo-h1">Customize Your Meal</div>
      <div className="row">
        <Fry currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      <div className="row">
        <Drink currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      <div className="combo-button">
        <AwesomeButton type="primary" className="button-one-combo">
          Go Back
        </AwesomeButton>
        <AwesomeButton type="primary" className="button-two-combo">
          Add To Cart
        </AwesomeButton>
      </div>
    </main>
  );
}
