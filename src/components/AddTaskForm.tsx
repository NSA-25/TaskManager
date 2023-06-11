import React, { useState } from 'react';

interface AddTaskFormProps {
    addTask: (title: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ addTask }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addTask(title);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="New task..."
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTaskForm;
