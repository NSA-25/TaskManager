import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const RegisterPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!password.match(/^(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
            alert('Password must be at least 8 characters long and contain both uppercase and lowercase characters.');
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Account created successfully");
        } catch (error) {
            if (error instanceof Error) {
                alert(error.message);
            } else {
                alert('Unexpected error');
            }
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
            <br />
            <p>Password must be at least 8 characters long and contain both uppercase and lowercase characters.</p>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterPage;
