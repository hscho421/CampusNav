import React from 'react';
import './TimeTable.css';  // Ensure you create this CSS file for styling

const TimeTable = ({ courses }) => {
  console.log("Courses received in TimeTable:", courses);
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  return (
    <div className="time-table">
      {days.map(day => (
        <div key={day} className="day-column">
          <h3>{day}</h3>
          {courses.filter(course => course.weekday === day).map((course, index) => (
            <div key={index} className="course">
              <p>{course.courseName} ({course.location})</p>
              <p>{course.startHour}:{course.startMinute} - {course.endHour}:{course.endMinute}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TimeTable;
