import React, { Component } from "react";
import Logo from "../Logo";
import css from "./style.module.css";

// import Toolbar from "../Toolbar";
import Menu from "../components/Menu";

class App extends Component {
  constructor() {
    super();

    this.state = {
      Api: [],
      // SearchField: "",
    };
  }
  // new
  componentDidMount() {
    this.getApi();
  }
  // new
  getApi() {
    fetch("http://172.16.9.189:8000/api/menu/list")
      .then((response) => response.json())
      .then((data) => this.setState({ Api: data })); //state ruu data hiih
  }
  render() {
    // const { Api, SearchField } = this.state;
    // const filteredRobots = Api.filter((el) => el.id.includes());
    return (
      <div>
        <Logo />
        <p>Hello React</p>

        <Menu CardProb={this.state.Api} />
        {/* Menu ruu Api gedeg attribute yavuul */}
      </div>
    );
  }
}

export default App;
