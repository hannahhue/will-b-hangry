import React from 'react';
import Fry from '../components/Fry';

export default function Combo({ currentPage, handlePageChange }) {
  return (
    <main>
      <div className='row'>
        <Fry currentPage={currentPage}
          handlePageChange={handlePageChange} />
      </div>
    </main>
  );
}
