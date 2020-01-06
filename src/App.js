import React from "react";
import { CardList } from "./components/card-list/card-list.jsx";
import { SearchBox } from "./components/search-box/search-box.jsx";
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
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => this.setState({ data: data }));
  }

  searchHandler = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { data, searchField } = this.state;
    return (
      <div>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder={"Search"}
          value={searchField}
          handleChange={this.searchHandler}
          type={"search"}
        />
        <CardList searchTerm={searchField} data={data} />
      </div>
    );
  }
}

export default App;
