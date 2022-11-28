//import
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

//login use state
function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);
  // catch and try err
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // render html
  return (
    <main className="log">
      <div className="login-page">
        <div className="form" onSubmit={handleFormSubmit}>
          <form className="login-form">
            <input
              placeholder="email"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
            <input
              placeholder="password"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
            {error ? (
              <div>
                <p className="error-text">
                  The provided credentials are incorrect
                </p>
              </div>
            ) : null}
            <button type="submit">login</button>
            <p className="message">
              Not registered? <Link to="/signup">Signup</Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
