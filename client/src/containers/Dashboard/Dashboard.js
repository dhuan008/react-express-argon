import React, { Component } from "react";
import authClient from "../../auth/authClient";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="text-center">
        <h3>Dashboard</h3>
        {authClient.isAuth ? <h4>User is auth</h4> : null}
      </div>
    );
  }
}
