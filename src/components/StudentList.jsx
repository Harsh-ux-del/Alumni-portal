import React from 'react';

const StudentList = ({ students, onEdit, onDelete }) => {
    return (
        <div>
            <h2>Student List</h2>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        {student.name}
                        <button onClick={() => onEdit(student.id)}>Edit</button>
                        <button onClick={() => onDelete(student.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;