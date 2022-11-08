import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import "./App.css";
import Scroll from "./Scroll";
class app extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      // robo: robots,
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ robots: users });
      });
  }
  onsearchchange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>Loading .....</h1>;
    }
    // const filteredRobotsemail = this.state.robo.filter((robot) => {
    //   return robot.email
    //     .toLowerCase()
    //     .includes(this.state.searchfield.toLowerCase());
    // });
    // const filteredRobotsUsername = this.state.robots.filter((robot) => {
    //   return robot.username
    //     .toLowerCase()
    //     .includes(this.state.searchfield.toLowerCase());
    // });
    return (
      <div className="tc ma1">
        <h1 className="f1">Friends With Binaries 🔢 </h1>
        <SearchBox searchchange={this.onsearchchange} />
        <Scroll>
          <CardList
            robots={filteredRobots}
            // robots={filteredRobotsemail}
            // robots={filteredRobotsUsername}
          ></CardList>
        </Scroll>
      </div>
    );
  }
}
export default app;
