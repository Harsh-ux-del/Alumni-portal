import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to the Centralized Alumni & Student Data Maintenance System</h1>
            <p>This platform allows you to manage and maintain data for both alumni and students efficiently.</p>
            <div className="navigation-options">
                <h2>Get Started</h2>
                <ul>
                    <li><a href="/alumni">View Alumni</a></li>
                    <li><a href="/students">View Students</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Home;