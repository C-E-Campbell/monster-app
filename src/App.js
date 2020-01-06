import React from "react";
import { CardList } from "./components/card-list/card-list.jsx";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchField: ""
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
        <input
          onChange={e => this.setState({ searchField: e.target.value })}
          value={this.state.searchField}
          type="search"
          placeholder="Search"
        />
        <CardList searchTerm={this.state.searchField} data={this.state.data} />
      </div>
    );
  }
}

export default App;
