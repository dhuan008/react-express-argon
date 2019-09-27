import React from "react";
import { Router, Route } from "react-router-dom";
import history from '../../utils/history';

import Landing from "../../components/pages/Landing/Landing";

function App() {
  return (
    <Router history={history}>
      <Landing />
    </Router>
  );
}

export default App;
