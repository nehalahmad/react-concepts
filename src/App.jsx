// App.jsx

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MemoCallback from "./Hooks/MemoAndCallback";
import NavigationBar from "./NavigationBar";

const Header = props => <div>{props.children}</div>;
const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Topic = () => <h2>Topic</h2>;

function App() {
  return (
    <Router>
      <div>
        <Header>
          <NavigationBar />
        </Header>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topic" component={Topic} />
        <Route path="/memoCallback" component={MemoCallback} />
      </div>
    </Router>
  );
}

export default App;
