import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <main className="log">
      <div className="login-page">
        <div className="form" onSubmit={handleFormSubmit}>
          <form className="login-form">
            <input
              placeholder="first name"
              name="firstName"
              type="firstName"
              id="firstName"
              onChange={handleChange}
            />
            <input
              placeholder="last name"
              name="lastName"
              type="lastName"
              id="lastName"
              onChange={handleChange}
            />
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
            <button type="submit">login</button>
            <p className="message">
              Have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Signup;
