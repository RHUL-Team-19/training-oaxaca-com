import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import TestButtons from "./screens/TestButtons";
import WelcomeScreen from "./screens/WelcomeScreen";
import "./style.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={TestButtons} />
      <Route path="/TestButtons/" exact component={TestButtons} />
      <Route path="/WelcomeScreen/" exact component={WelcomeScreen} />
    </Router>
  );
}

export default App;
