
import React from 'react';
import PropTypes from 'prop-types';

// import { Link } from "react-router-dom";

class SignupForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };
  render() {
    return (
        <div className="col-md-3 mx-auto">
        <h2 className="mb-3 text-center">Sign Up</h2>
        <form onSubmit={e => this.props.handle_signup(e, this.state)}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" name="username" value={this.state.username} onChange={this.handle_change} className="form-control" minLength="2" maxLength="50" autoFocus required />
          </div>  
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handle_change} className="form-control" maxLength="100" required />
          </div>
          <div className="d-grid gap-2">
              <button type="submit" className="btn btn-block btn-primary">
                Sign Up
              </button>
          </div>
        </form>
  
      </div>
    );
  }
}

export default SignupForm;

SignupForm.propTypes = {
  handle_signup: PropTypes.func.isRequired
};