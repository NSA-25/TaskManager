import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <nav>
            <Link to="/" onClick={() => window.location.href="/"}>
                Home
            </Link>
            {' | '}
            <Link to="/login" onClick={() => window.location.href="/login"}>
                Login
            </Link>
            {' | '}
            <Link to="/register" onClick={() => window.location.href="/register"}>
                Register
            </Link>
            {' | '}
            <Link to="/tasks" onClick={() => window.location.href="/tasks"}>
                Tasks
            </Link>
        </nav>
    );
};

export default Header;
