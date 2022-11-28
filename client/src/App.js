//import react apollo and boot
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import './product.css';
import { Provider } from 'react-redux';

//import pages and global state
import store from './utils/globalState';
import Home from './pages/Home';
import Combo from './pages/Combo';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Signup from './pages/Signup';
import Topping from './components/Topping';
import Test from './pages/Test2';
import Navbar from './components/Navbar';
import Success from './pages/Sucess';

//create graphql uri
const httpLink = createHttpLink({
  uri: '/graphql',
});

//create context for auth
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

//connect apollo tp auth and cacheee
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

//render page changes and navbar
function App() {
  const handlePageChange = (page) => setCurrentPage(page);
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Provider store={store}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/topping/:burgerId" element={<Topping />} />
              <Route path="/combo" element={<Combo />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/success" element={<Success />} />
            </Routes>
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
