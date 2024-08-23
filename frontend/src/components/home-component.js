import React from 'react';

function Home({ setToken}) {
    const logout = () => {
        setToken(null);
        localStorage.clear();
        console.log('User logged out');
    };
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Home;