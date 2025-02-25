import React from "react";
import PropTypes from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";

import "./Tasks.css";

export default function Tasks({ tasks, handleEdit, handleDelete }) {
  return (
    <ul className="tasks">
      {tasks.map((task, i) => {
        return (
          <li key={task}>
            {task}
            <span>
              <FaEdit onClick={(e) => handleEdit(e, i)} className="edit" />{" "}
              <FaTrash
                onClick={(e) => handleDelete(e, i)}
                className="delete"
              />
            </span>
          </li>
        );
      })}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};