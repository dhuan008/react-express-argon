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
    requests: [
      {
        signin: {
          message: "",
          error: false
        }
      }
    ]
  };

  signin = (email, password) => {
    API_signin()
      .then(response => {})
      .catch(error => {});
  };

  register = (values, setSubmitting) => {
    API_register(values)
      .then(response => {
        setSubmitting(false);
      })
      .catch(error => {
        setSubmitting(false);
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
          render={() => <Register register={this.register} />}
        />
        />
      </Router>
    );
  }
}
