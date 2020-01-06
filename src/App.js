import React from "react";
import { CardList } from "./components/card-list/card-list.jsx";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      string: "Hello Charlie",
      data: []
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => this.setState({ data: data }));
  }

  render() {
    return (
      <div>
        <CardList data={this.state.data} />
      </div>
    );
  }
}

export default App;
