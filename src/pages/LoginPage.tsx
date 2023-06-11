import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const LoginPage = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        setCookie('user', email, { path: '/' });
    };

    const handleLogout = () => {
        removeCookie('user');
    };

    return (
        <div>
            {cookies.user ? (
                <div>
                    <p>Logged in with {cookies.user}</p>
                    <button onClick={handleLogout}>Log out</button>
                </div>
            ) : (
                <div>
                    <p>Not logged in</p>
                    <form onSubmit={handleLogin}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit">Log in</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default LoginPage;
