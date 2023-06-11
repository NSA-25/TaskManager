import React from 'react';
import TaskItem from './TaskItem';

interface TaskListProps {
    tasks: Array<{
        id: string;
        title: string;
        completed: boolean;
    }>;
    deleteTask: (id: string) => void;
    toggleTaskCompletion: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask, toggleTaskCompletion }) => {
    return (
        <div>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleTaskCompletion={toggleTaskCompletion}
                />
            ))}
        </div>
    );
};

export default TaskList;
