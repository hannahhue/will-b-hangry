import React from 'react';
import { useQuery } from '@apollo/client';
import Burgers from '../components/Burgers';
import { useDispatch, useSelector } from 'react-redux';

export default function Cart({ currentPage, handlePageChange }) {
  const state = useSelector((state) => state.shop);
  const { cart } = state;
  console.log(cart);
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
              <div className="title">Receipt</div>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <a>🗑️</a>
                    </td>
                    <td>2 x Coffee</td>
                    <td className="right">$10</td>
                  </tr>
                  <tr>
                    <td>
                      <a>DEL</a>
                    </td>
                    <td>2 x Coffee</td>
                    <td className="right">$10</td>
                  </tr>
                </tbody>
              </table>
              <div className="bar center">
                <div className="barcode"></div>
                <br />
                0123456789
                <br />
                <div className="thankyou">Thank you for your business</div>
              </div>
            </div>
          </div>
        </div>

        {/* payment */}
        <div className="container p-0">
          <div className="pay px-4">
            <div className="row gx-3">
              <div className="col-12">
                <div className="d-flex flex-column">
                  <p className="text mb-1">Person Name</p>
                  <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex flex-column">
                  <p className="text mb-1">Card Number</p>
                  <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="1234 5678 435678"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex flex-column">
                  <p className="text mb-1">Expiry</p>
                  <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="MM/YYYY"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="d-flex flex-column">
                  <p className="text mb-1">CVV/CVC</p>
                  <input
                    className="form-control mb-3 pt-2 "
                    type="password"
                    placeholder="***"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="btn btn-primary mb-3">
                  <span className="ps-3">Pay $243</span>
                  <span className="fas fa-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
