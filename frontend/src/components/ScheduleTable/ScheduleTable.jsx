import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import './ScheduleTable.css'

const ScheduleTable = () => {
    const { t } = useTranslation();
    const [courses, setCourses] = useState([
        { courseName: '', location: '', startTime: '', endTime: '' }
    ]);

    const handleChange = (index, event) => {
        const { name, value } = event.target;
        const updatedCourses = [...courses];
        updatedCourses[index][name] = value;
        setCourses(updatedCourses);

        if (index === courses.length - 1 && value !== '') {
            const allFieldsFilled = Object.values(updatedCourses[index]).every(field => field !== '');
            if (allFieldsFilled) {
              setCourses([...courses, { courseName: '', location: '', startTime: '', endTime: '' }]);
            }
        }
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>{t('courseName')}</th>
                    <th>{t('location')}</th>
                    <th>{t('startTime')}</th>
                    <th>{t('endTime')}</th>
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
