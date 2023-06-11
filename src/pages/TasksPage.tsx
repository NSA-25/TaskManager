import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';

const TasksPage: React.FC = () => {
    const [tasks, setTasks] = useState<Array<{ id: string; title: string; completed: boolean }>>([]);

    const addTask = (title: string) => {
        const newTask = { id: Date.now().toString(), title, completed: false };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleTaskCompletion = (id: string) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    return (
        <div>
            <h2>Tasks</h2>
            <AddTaskForm addTask={addTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask} toggleTaskCompletion={toggleTaskCompletion} />
        </div>
    );
};

export default TasksPage;
