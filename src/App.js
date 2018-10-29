import React, { Component } from "react";
import "./App.css";
import Counter from "./Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter title="My Awesome Counter" step={1} />
        <Counter title="Niaasdfl's awesome counter" step={-1} />
        <Counter title="Number of beers needed" step={5} />
      </div>
    );
  }
}

export default App;
