import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import './ScheduleTable.css';

// Define default values for each row
const defaultCourses = [
  // { weekday: 'Monday', courseName: 'ECE 220', buildingName: 'ECEB', roomNumber: '101',startHour: '11', startMinute: '00', endHour: '11', endMinute: '50' },
  // { weekday: 'Monday', courseName: 'PHYS 212', buildingName: 'Loomis', roomNumber: '141', startHour: '12', startMinute: '00', endHour: '12', endMinute: '50' },
  // { weekday: 'Monday', courseName: 'MATH 257', buildingName: 'Campus Instructional Facility', roomNumber: '4011', startHour: '13', startMinute: '00', endHour: '13', endMinute: '50' },
  // { weekday: 'Monday', courseName: 'MATH 285', buildingName: 'Campus Instructional Facility', roomNumber: '0011', startHour: '14', startMinute: '00', endHour: '13', endMinute: '50' },

  // Test values
  { weekday: 'Monday', courseName: 'MATH 285 Lecture', buildingName: 'Natural History Building', roomNumber: '0011', startHour: '14', startMinute: '00', endHour: '14', endMinute: '50' },
  { weekday: 'Monday', courseName: 'MATH 257 Lecture', buildingName: 'Campus Intructional Facility', roomNumber: '4011', startHour: '13', startMinute: '00', endHour: '13', endMinute: '50' },
  { weekday: 'Tuesday', courseName: 'ECE 220 Lecture', buildingName: 'ECEB', roomNumber: '001', startHour: '11', startMinute: '00', endHour: '12', endMinute: '50' },
  { weekday: 'Tuesday', courseName: 'PHYS 212 Lecture', buildingName: 'Loomis Labratory', roomNumber: '141', startHour: '13', startMinute: '00', endHour: '13', endMinute: '50' },
  { weekday: 'Tuesday', courseName: 'PHYS 212 Discussion', buildingName: 'Campus Intructional Facility', roomNumber: '4011', startHour: '14', startMinute: '00', endHour: '15', endMinute: '50' },
  { weekday: 'Tuesday', courseName: 'MATH 257 Discussion', buildingName: 'Engineering Hall', roomNumber: '001', startHour: '16', startMinute: '00', endHour: '16', endMinute: '50' },
  { weekday: 'Wednesday', courseName: 'MATH 285 Lecture', buildingName: 'Natural History Building', roomNumber: '0011', startHour: '14', startMinute: '00', endHour: '14', endMinute: '50' },
  { weekday: 'Wednesday', courseName: 'MATH 257 Lecture', buildingName: 'Campus Intructional Facility', roomNumber: '4011', startHour: '13', startMinute: '00', endHour: '13', endMinute: '50' },
  { weekday: 'Thursday', courseName: 'ECE 220 Lecture', buildingName: 'ECEB', roomNumber: '001', startHour: '11', startMinute: '00', endHour: '12', endMinute: '50' },
  { weekday: 'Thursday', courseName: 'PHYS 212 Lecture', buildingName: 'Loomis Labratory', roomNumber: '141', startHour: '13', startMinute: '00', endHour: '13', endMinute: '50' },
  { weekday: 'Thursday', courseName: 'PHYS 212 Labratory', buildingName: 'English Building', roomNumber: '4011', startHour: '14', startMinute: '00', endHour: '15', endMinute: '50' },
  { weekday: 'Friday', courseName: 'ECE 220 Labratory', buildingName: 'ECEB', roomNumber: '001', startHour: '12', startMinute: '00', endHour: '12', endMinute: '50' },
  { weekday: 'Friday', courseName: 'MATH 285 Labratory', buildingName: 'Digitial Computing Labratory', roomNumber: '0011', startHour: '14', startMinute: '00', endHour: '13', endMinute: '50' },
  { weekday: 'Friday', courseName: 'MATH 257 Labratory', buildingName: 'David Kinley Hall', roomNumber: '', startHour: '13', startMinute: '00', endHour: '13', endMinute: '50' },

];

const ScheduleTable = ({ setCourses }) => {
  const { t } = useTranslation();
  const [courses, updateCourses] = useState(defaultCourses);

  useEffect(() => {
    setCourses(courses);
  }, [courses, setCourses]);

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedCourses = [...courses];
    updatedCourses[index][name] = value;
    updateCourses(updatedCourses);
    setCourses(updatedCourses);
  };

  const addRow = () => {
    const newCourse = { weekday: '', courseName: '', buildingName: '', roomNumber: '', startHour: '', startMinute: '', endHour: '', endMinute: '' };
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
            <th>{t('weekday')}</th>
            <th>{t('courseName')}</th>
            <th>{t('buildingName')}</th>
            <th>{t('roomNumber')}</th>
            <th>{t('startTime')}</th>
            <th>{t('endTime')}</th>
            <th>{t('actions')}</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>
                <select name="weekday" value={course.weekday} onChange={(event) => handleChange(index, event)}>
                  <option value="">{t('--')}</option>
                  <option value="Monday">{t('monday')}</option>
                  <option value="Tuesday">{t('tuesday')}</option>
                  <option value="Wednesday">{t('wednesday')}</option>
                  <option value="Thursday">{t('thursday')}</option>
                  <option value="Friday">{t('friday')}</option>
                </select>
              </td>
              <td>
                <input
                  type="text"
                  name="courseName"
                  value={course.courseName}
                  onChange={(event) => handleChange(index, event)}
                  placeholder={t('courseName')}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="buildingName"
                  value={course.buildingName}
                  onChange={(event) => handleChange(index, event)}
                  placeholder={t('buildingName')}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="roomNumber"
                  value={course.roomNumber}
                  onChange={(event) => handleChange(index, event)}
                  placeholder={t('roomNumber')}
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
                    <option value="">--</option>
                    {generateOptions(24)}
                  </select>
                  :
                  <select
                    name="endMinute"
                    value={course.endMinute}
                    onChange={(event) => handleChange(index, event)}
                    className="time-select"
                  >
                    <option value="">--</option>
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
