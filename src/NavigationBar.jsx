// NavigationBar.jsx
import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = _props => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/topic">Topic</Link>
    <Link to="/memoCallback">Memo Callback</Link>
  </div>
);

export default NavigationBar;
