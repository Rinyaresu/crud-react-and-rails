import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Posts from "./features/posts/Posts";

function App() {
  return (
    <div className="App container">
      <Posts />
    </div>
  );
}

export default App;
