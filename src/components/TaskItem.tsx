import React from 'react';

interface TaskItemProps {
    task: {
        id: string;
        title: string;
        completed: boolean;
    };
    deleteTask: (id: string) => void;
    toggleTaskCompletion: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, deleteTask, toggleTaskCompletion }) => {
    return (
        <div>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
                readOnly
            />
            <span>{task.title}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
};

export default TaskItem;
