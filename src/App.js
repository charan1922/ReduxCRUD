import React, { Component } from "react";

import Header from "./Components/header/";

import TaskBar from "./Components/taskBar/";
import TaskList from "./Components/taskList/";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TaskBar />
        <TaskList />
      </div>
    );
  }
}

export default App;
