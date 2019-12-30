import React from "react";
import "./App.css";
import Home from "./pages/Home.js";
import { Route } from "react-router-dom";
function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
    </>
  );
}

export default App;
