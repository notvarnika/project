import { useState } from "react";
import styles from "./TodoList.module.css";
import InputField from "../inputField/InputField";
import Buttonfield from "../buttonField/ButtonField";

export default function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Submit monthly expense report", completed: false },
    { id: 2, text: "Review team trip requests", completed: true },
  ]);
  const [newTaskText, setNewTaskText] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;

    const newTask = {
      id: Date.now(),
      text: newTaskText.trim(),
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskText("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className={styles.todoCard}>
      <fieldset className={styles.todoFieldset}>
        <legend className={styles.todoLegend}>To-Do List</legend>

        <form onSubmit={addTask} className={styles.todoForm}>
          <InputField
            type="text"
            className={styles.todoInput}
            placeholder="Add a new task..."
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
          />
          <Buttonfield
            type="submit"
            className={styles.addButton}
            title={"Add"}
          />
        </form>

        <ul className={styles.taskList}>
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`${styles.taskItem} ${
                task.completed ? styles.completed : ""
              }`}
            >
              <label className={styles.taskLabel}>
                <InputField
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className={styles.checkbox}
                />
                <span className={styles.taskText}>{task.text}</span>
              </label>
              <button
                onClick={() => deleteTask(task.id)}
                className={styles.deleteButton}
                title="Delete task"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        {tasks.length === 0 && (
          <p className={styles.emptyState}>
            No tasks available. Add one above!
          </p>
        )}
      </fieldset>
    </div>
  );
}
