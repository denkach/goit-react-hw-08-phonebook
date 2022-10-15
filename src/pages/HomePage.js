import { NavLink } from 'react-router-dom';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <p className="homeTitle">
        To start working with the contact book, please{' '}
        <NavLink to="/register" style={{ color: 'white' }}>
          REGISTER
        </NavLink>{' '}
        or if you have an account -{' '}
        <NavLink to="/login" style={{ color: 'white' }}>
          LOGIN
        </NavLink>
      </p>
    </>
  );
};

export default HomePage;
