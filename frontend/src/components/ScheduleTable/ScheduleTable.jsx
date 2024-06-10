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
    const [selectedWeekday, setSelectedWeekday] = useState('');
    const [courses, setCourses] = useState(initialCourses);

    const handleChange = (index, event) => {
        const { name, value } = event.target;
        const updatedCourses = [...courses];
        updatedCourses[index][name] = value;
        updatedCourses[index].weekday = selectedWeekday;
        setCourses(updatedCourses);
    };

    const handleDayClick = (day) => {
        setSelectedWeekday(day);
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
            <div className="weekday-buttons">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                    <button
                        key={day}
                        type="button"
                        className={selectedWeekday === day ? 'selected-day' : ''}
                        onClick={() => handleDayClick(day)}
                        aria-pressed={selectedWeekday === day}
                    >
                        {t(day)}
                    </button>
                ))}
            </div>
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
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
                                    {t('addRow')}
                                </button>
                                <button type="button" onClick={() => removeRow(index)} className="action-button">
                                    {t('removeRow')}
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
