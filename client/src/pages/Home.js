import React from 'react';
import burgImg from '../images/burg.png';
import { useQuery } from '@apollo/client';
import Burgers from '../components/Burgers';

export default function Home({ currentPage, handlePageChange }) {
  return (
    <main>
      <div className="sign">
        {/* title / sign */}
        <div className="title">
          <div className="neon">Will B</div>
          <div className="flux">Hangry</div>
        </div>
      </div>
      {/* view product cards */}
      <div className="row">
        <Burgers
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>

      {/* about us */}
      <div className="about">
        <h1>About Us</h1>
      </div>
      <div class="about-card">
        <div class="card-body">
          <h3 class="card-title">Card title</h3>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </main>
  );
}
