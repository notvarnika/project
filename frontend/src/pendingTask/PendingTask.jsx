import styles from "./PendingTasks.module.css";

export default function PendingTask({ tasks = [] }) {
  return (
    <div className={styles.taskCard}>
      <fieldset className={styles.taskFieldset}>
        <legend className={styles.taskLegend}>Pending Tasks</legend>

        {tasks.length > 0 ? (
          <ul className={styles.taskList}>
            {tasks.map((task, index) => (
              <li key={index} className={styles.taskItem}>
                <span className={styles.taskDot}></span>
                {task}
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.noTasks}>All clear! No pending tasks.</div>
        )}
      </fieldset>
    </div>
  );
}
