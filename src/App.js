import React from "react";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      string: "Hello Charlie"
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.string}</h1>
        <button onClick={() => this.setState({ string: "Hey Kid" })}>
          Change Text
        </button>
      </div>
    );
  }
}

export default App;
