import React from 'react';
import PropTypes from 'prop-types';

function Nav(props) {
  const logged_out_nav = (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item" onClick={() => props.display_form('login')}>
            <div className='btn nav-link'>
                Login
            </div>
          </li>
          <li className="nav-item" onClick={() => props.display_form('signup')}>
            <div className='btn nav-link'>
              Register
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );

  const logged_in_nav = (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" onClick={() => props.display_form('home')}>
                <div className='btn nav-link'>
                  Home
                </div>
            </li>
            <li className="nav-item" >
              <div className='btn nav-link' onClick={() => props.display_form('add')}>
                Add Company
              </div>
            </li>
            <li className="nav-item" onClick={props.handle_logout}>
              <div className='btn nav-link'>
                Log Out
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
  return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;

Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};