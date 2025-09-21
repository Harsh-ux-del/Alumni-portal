import React from 'react';
import AlumniList from '../components/AlumniList';
import Dashboard from '../components/Dashboard';

const Alumni = () => {
    return (
        <div>
            <h1>Alumni Dashboard</h1>
            <Dashboard />
            <AlumniList />
        </div>
    );
};

export default Alumni;