import React, { Component } from "react";
import { LuHexagon } from "react-icons/lu";

import Tasks from "./Tasks";
import Form from "./Form";

import "./Main.css";

class Main extends Component {
  state = {
    newTask: "",
    tasks: [],
    index: -1,
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (!tasks) return;
    this.setState({ tasks });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;

    if (tasks === prevState.tasks) return;

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks, index } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1) return;

    const newTasks = [...tasks];

    if (index === -1) {
      this.setState({
        tasks: [...newTasks, newTask],
        newTask: "",
      });
      return;
    } else {
      newTasks[index] = newTask;

      this.setState({
        tasks: [...newTasks],
        newTask: "",
        index: -1,
      });
    }
  };

  handleChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  handleEdit = (e, i) => {
    const { tasks } = this.state;

    this.setState({
      index: i,
      newTask: tasks[i],
    });
  };

  handleDelete = (e, i) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];
    newTasks.splice(i, 1);
    this.setState({ tasks: [...newTasks] });
  };

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <div className="title">
          <LuHexagon className="honey-icon" />
          <h1>Honeycomb Planner</h1>
        </div>

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newTask={newTask}
        />

        <Tasks
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          tasks={tasks}
        />
      </div>
    );
  }
}

export default Main;
