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

const ScheduleTable = () => {
    const { t } = useTranslation();
    const [courses, setCourses] = useState(initialCourses);

    const handleChange = (index, event) => {
        const { name, value } = event.target;
        const updatedCourses = [...courses];
        updatedCourses[index][name] = value;
        setCourses(updatedCourses);
    };

    const addRow = () => {
        setCourses([...courses, { weekday: '', courseName: '', location: '', startHour: '', startMinute: '', endHour: '', endMinute: '' }]);
    };

    const removeRow = (index) => {
        const updatedCourses = courses.filter((_, idx) => idx !== index);
        setCourses(updatedCourses);
    };

    const generateOptions = (range) => {
        return Array.from({ length: range }, (v, k) => k).map((num) => (
            <option key={num} value={num < 10 ? `0${num}` : num}>{num < 10 ? `0${num}` : num}</option>
        ));
    };

    return (
        <div>
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>{t('day')}</th>
                            <th>{t('courseName')}</th>
                            <th>{t('location')}</th>
                            <th>{t('startTime')}</th>
                            <th>{t('endTime')}</th>
                            <th>{t('actions')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course, index) => (
                            <tr key={index}>
                                <td>
                                    <select
                                        name="weekday"
                                        value={course.weekday}
                                        onChange={(event) => handleChange(index, event)}
                                        className="invisible-input"
                                    >
                                        <option value="" disabled>{t('selectWeekday')}</option>
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
                                        className="invisible-input"
                                        placeholder={t('enterCourseName')}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="location"
                                        value={course.location}
                                        onChange={(event) => handleChange(index, event)}
                                        className="invisible-input"
                                        placeholder={t('enterLocation')}
                                    />
                                </td>
                                <td>
                                    <div className="time-select-wrapper">
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
                                    <div className="time-select-wrapper">
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
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="control-button" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                                        </svg>
                                    </button>
                                    <button type="button" onClick={() => removeRow(index)} className="action-button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="control-button" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ScheduleTable;
