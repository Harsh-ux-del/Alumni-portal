import React from 'react';

const StudentProfile = ({ student }) => {
    return (
        <div className="student-profile">
            <h2>{student.name}</h2>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Graduation Year:</strong> {student.graduationYear}</p>
            <p><strong>Major:</strong> {student.major}</p>
            <p><strong>Bio:</strong> {student.bio}</p>
            {/* Add more fields as necessary */}
            <button>Edit Profile</button>
        </div>
    );
};

export default StudentProfile;