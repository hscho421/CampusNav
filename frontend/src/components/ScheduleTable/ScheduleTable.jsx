import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ScheduleTable = () => {
    const { t } = useTranslation();
    const [courses, setCourses] = useState([
        { [t('courseName')]: '', [t('location')]: '', [t('startTime')]: '', [t('endTime')]: ''}
    ]);

    const handleChange = (index, event) => {
        const values = [...courses];
        values[index][event.target.name] = event.target.value;
        setCourses(event);

        if (index === courses.length - 1 && event.target.value !== '') {
            const allFieldsFilled = Object.values(values[index]).every(field => field !== '');
            if (allFieldsFilled) {
              setCourses([...courses, { courseName: '', location: '', startTime: '', endTime: '' }]);
            }
        }
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Course Name</th>
                    <th>Location</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                </tr>
            </thead>
            <tbody>
            {courses.map((course, index) => (
                <tr key={index}>
                    <td>
                        <input
                        type="text"
                        name="courseName"
                        value={course.courseName}
                        onChange={(event) => handleChange(index, event)}
                    />
                    </td>
                    <td>
                        <input
                            type="text"
                            name="location"
                            value={course.location}
                            onChange={(event) => handleChange(index, event)}
                        />
                    </td>
                    <td>
                        <input
                            type="time"
                            name="startTime"
                            value={course.startTime}
                            onChange={(event) => handleChange(index, event)}
                        />
                    </td>
                    <td>
                        <input
                            type="time"
                            name="endTime"
                            value={course.endTime}
                            onChange={(event) => handleChange(index, event)}
                        />
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ScheduleTable;