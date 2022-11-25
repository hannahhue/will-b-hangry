import React from 'react';
import { useQuery } from '@apollo/client';
import Burgers from '../components/Burgers';

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
        <Burgers />
      </div>

      {/* order sum sign */}
      <div class="logo">
        <b>
          Ord<span>er</span> <span>Sum</span>mary
        </b>
      </div>

      {/* order sum */}
      <div className="contain">
        <div class="container">
          <div class="tab"></div>
          <div class="receipt">
            <div class="paper">
              <div class="title">Receipt</div>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <a>🗑️</a>
                    </td>
                    <td>2 x Coffee</td>
                    <td class="right">$10</td>
                  </tr>
                  <tr>
                    <td>
                      <a>DEL</a>
                    </td>
                    <td>2 x Coffee</td>
                    <td class="right">$10</td>
                  </tr>
                </tbody>
              </table>
              <div class="bar center">
                <div class="barcode"></div>
                <br />
                0123456789
                <br />
                <div class="thankyou">Thank you for your business</div>
              </div>
            </div>
          </div>
        </div>

        {/* payment */}
        <div class="container p-0">
          <div class="pay px-4">
            <div class="row gx-3">
              <div class="col-12">
                <div class="d-flex flex-column">
                  <p class="text mb-1">Person Name</p>
                  <input
                    class="form-control mb-3"
                    type="text"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="d-flex flex-column">
                  <p class="text mb-1">Card Number</p>
                  <input
                    class="form-control mb-3"
                    type="text"
                    placeholder="1234 5678 435678"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="d-flex flex-column">
                  <p class="text mb-1">Expiry</p>
                  <input
                    class="form-control mb-3"
                    type="text"
                    placeholder="MM/YYYY"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="d-flex flex-column">
                  <p class="text mb-1">CVV/CVC</p>
                  <input
                    class="form-control mb-3 pt-2 "
                    type="password"
                    placeholder="***"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="btn btn-primary mb-3">
                  <span class="ps-3">Pay $243</span>
                  <span class="fas fa-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
