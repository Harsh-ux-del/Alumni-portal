import React from 'react';
import StudentList from '../components/StudentList';
import Dashboard from '../components/Dashboard';

const Students = () => {
    return (
        <div>
            <h1>Students Dashboard</h1>
            <Dashboard />
            <StudentList />
        </div>
    );
};

export default Students;