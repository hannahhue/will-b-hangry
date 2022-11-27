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

import { Provider } from 'react-redux';
import store from './utils/globalState';
import Test from './pages/Test';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Container from './components/Container';
import Navbar from './components/Navbar';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const handlePageChange = (page) => setCurrentPage(page);
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Provider store={store}>
            <Navbar
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Container
                    currentPage={currentPage}
                    handlePageChange={handlePageChange}
                  />
                }
              />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
