import React from 'react';

const AlumniProfile = ({ alumniData, onEdit }) => {
    return (
        <div className="alumni-profile">
            <h2>{alumniData.name}</h2>
            <p><strong>Email:</strong> {alumniData.email}</p>
            <p><strong>Graduation Year:</strong> {alumniData.graduationYear}</p>
            <p><strong>Major:</strong> {alumniData.major}</p>
            <p><strong>Current Position:</strong> {alumniData.currentPosition}</p>
            <button onClick={onEdit}>Edit Profile</button>
        </div>
    );
};

export default AlumniProfile;