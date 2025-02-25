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
    tasks: [],
    index: -1,
  };

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
    
  }


  handleChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  handleEdit = (e, i) => {
    const { tasks } = this.state;

    this.setState({
      index: i,
      newTask: tasks[i],
    })
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
        <form onSubmit={this.handleSubmit} action="#" className="form">
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
          {tasks.map((task, i) => {
            return (
              <li key={task}>
                {task}
                <span>
                  <FaEdit onClick={(e) => this.handleEdit(e, i)} className="edit" />{" "}
                  <FaTrash onClick={(e) => this.handleDelete(e, i)} className="delete" />
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Main;
