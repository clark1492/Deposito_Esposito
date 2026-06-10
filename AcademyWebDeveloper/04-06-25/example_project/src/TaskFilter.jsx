export function TaskFilter({ tasks, showOnlyPending }) {
    return (
        <div className="task-container">
            <h3>Elenco Attività</h3>
            <ul>
                {tasks
                    // Filtriamo l'array prima di convertirlo in JSX
                    .filter(task => !showOnlyPending || !task.completed)
                    .map(task => (
                        <li key={task.id} className={task.completed ? "done" : "pending"}>
                            {task.title} - {task.completed ? "Completata" : "In sospeso"}
                        </li>
                    ))}
            </ul>
        </div>
    );
}