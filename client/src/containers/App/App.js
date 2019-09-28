import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import history from "../../utils/history";

import Landing from "../../components/pages/Landing/Landing";
import Signin from "../Signin/Signin";
import Register from "../Register/Register";

import { API_signin, API_register } from "../../requests/requests";

export default class App extends Component {
  state = {
    isAuth: false,
    token: null,
    registerError: false,
    message: ""
  };

  signin = (email, password) => {
    API_signin()
      .then(response => {})
      .catch(error => {});
  };

  register = (values, setSubmitting) => {
    this.setState({
      registerError: false,
      message: ""
    });

    API_register(values)
      .then(response => {
        setSubmitting(false);
      })
      .catch(error => {
        setSubmitting(false);

        this.setState({
          registerError: true,
          message: error.response.data
        });
      });
  };

  render() {
    return (
      <Router history={history}>
        <Route path="/" exact component={Landing} />
        <Route
          path="/signin"
          exact
          render={() => <Signin signin={this.signin} />}
        />
        <Route
          path="/register"
          exact
          render={() => (
            <Register
              register={this.register}
              registerError={this.state.registerError}
              message={this.state.message}
            />
          )}
        />
        />
      </Router>
    );
  }
}
