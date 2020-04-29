import React, { Component } from "react";

import css from "./style.module.css";
import "bulma/css/bulma.css";

// import Toolbar from "../Toolbar";
import Menu from "../components/Menu";
// import SubMenuItem from "../components/SubMenuItem";
import DropDown from "../components/dropdown";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }
  onSearchChanged = (event) => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetch("http://172.16.9.189:8000/api/menu/list")
      .then((response) => response.json())
      .then((data) => this.setState({ robots: data }));
  }
  render() {
    console.log(this.state.robots);
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((el) =>
      el.name.toLowerCase().includes(searchField)
    );
    return (
      <div className={css.App}>
        <h1>Hello Class Component</h1>
        {/* <Menu onSearch={this.onSearchChanged} /> */}
        <Menu robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
