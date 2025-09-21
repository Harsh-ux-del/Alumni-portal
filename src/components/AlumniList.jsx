import React from 'react';

const AlumniList = ({ alumni }) => {
    return (
        <div>
            <h2>Alumni List</h2>
            <ul>
                {alumni.map((alumnus, index) => (
                    <li key={index}>
                        {alumnus.name} - {alumnus.yearGraduated}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlumniList;