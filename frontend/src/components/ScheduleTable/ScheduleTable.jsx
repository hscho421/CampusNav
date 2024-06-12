import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import './ScheduleTable.css';

const initialCourses = Array.from({ length: 5 }, () => ({
    weekday: '',
    courseName: '',
    location: '',
    startHour: '',
    startMinute: '',
    endHour: '',
    endMinute: ''
}));

const ScheduleTable = ({ setCourses }) => {
    const { t } = useTranslation();
    const [courses, updateCourses] = useState(initialCourses);

    const handleChange = (index, event) => {
        const { name, value } = event.target;
        const updatedCourses = [...courses];
        updatedCourses[index][name] = value;
        updateCourses(updatedCourses);
        setCourses(updatedCourses);
    };

    const addRow = () => {
        const newCourse = { weekday: '', courseName: '', location: '', startHour: '', startMinute: '', endHour: '', endMinute: '' };
        const updatedCourses = [...courses, newCourse];
        updateCourses(updatedCourses);
        setCourses(updatedCourses);
    };

    const removeRow = (index) => {
        const updatedCourses = courses.filter((_, i) => i !== index);
        updateCourses(updatedCourses);
        setCourses(updatedCourses);
    };

    const generateOptions = (num) => {
        const options = [];
        for (let i = 0; i < num; i++) {
            options.push(
                <option key={i} value={i < 10 ? `0${i}` : i}>{i < 10 ? `0${i}` : i}</option>
            );
        }
        return options;
    };

    return (
        <div className="schedule-table-container">
            <table className="schedule-table">
                <thead>
                    <tr>
                        <th>{t('Weekday')}</th>
                        <th>{t('Course Name')}</th>
                        <th>{t('Location')}</th>
                        <th>{t('Start Time')}</th>
                        <th>{t('End Time')}</th>
                        <th>{t('Actions')}</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course, index) => (
                        <tr key={index}>
                            <td>
                                <select name="weekday" value={course.weekday} onChange={(event) => handleChange(index, event)}>
                                    <option value="">{t('--')}</option>
                                    <option value="Monday">{t('Monday')}</option>
                                    <option value="Tuesday">{t('Tuesday')}</option>
                                    <option value="Wednesday">{t('Wednesday')}</option>
                                    <option value="Thursday">{t('Thursday')}</option>
                                    <option value="Friday">{t('Friday')}</option>
                                </select>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="courseName"
                                    value={course.courseName}
                                    onChange={(event) => handleChange(index, event)}
                                    placeholder={t('Course Name')}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="location"
                                    value={course.location}
                                    onChange={(event) => handleChange(index, event)}
                                    placeholder={t('Location')}
                                />
                            </td>
                            <td>
                                <div className="time-select-container">
                                    <select
                                        name="startHour"
                                        value={course.startHour}
                                        onChange={(event) => handleChange(index, event)}
                                        className="time-select"
                                    >
                                        <option value="">{t('--')}</option>
                                        {generateOptions(24)}
                                    </select>
                                    :
                                    <select
                                        name="startMinute"
                                        value={course.startMinute}
                                        onChange={(event) => handleChange(index, event)}
                                        className="time-select"
                                    >
                                        <option value="">{t('--')}</option>
                                        {generateOptions(60)}
                                    </select>
                                </div>
                            </td>
                            <td>
                                <div className="time-select-container">
                                    <select
                                        name="endHour"
                                        value={course.endHour}
                                        onChange={(event) => handleChange(index, event)}
                                        className="time-select"
                                    >
                                        <option value="">{t('--')}</option>
                                        {generateOptions(24)}
                                    </select>
                                    :
                                    <select
                                        name="endMinute"
                                        value={course.endMinute}
                                        onChange={(event) => handleChange(index, event)}
                                        className="time-select"
                                    >
                                        <option value="">{t('--')}</option>
                                        {generateOptions(60)}
                                    </select>
                                </div>
                            </td>
                            <td>
                                <button type="button" onClick={addRow} className="action-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="control-button" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                                    </svg>
                                </button>
                                <button type="button" onClick={() => removeRow(index)} className="action-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="control-button" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ScheduleTable;
