import React, { Component } from "react";

//Form
import { FaPlus } from "react-icons/fa";
import { LuHexagon } from "react-icons/lu";

//Tasks
import { FaEdit, FaTrash } from "react-icons/fa";

import "./Main.css";

class Main extends Component {
  state = {
    newTask: "",
    tasks: ["Task 1", "Task 2", "Task 3"],
  };

  handleChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <div className="title">
          <LuHexagon className="honey-icon" />
          <h1>Honeycomb Planner</h1>
        </div>
        <form action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Add Task..."
            value={newTask}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tasks">
          {tasks.map((task) => {
            return (
              <li key={task}>
                {task}
                <div>
                  <FaEdit className="edit" />{" "}
                  <FaTrash className="delete" />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Main;
