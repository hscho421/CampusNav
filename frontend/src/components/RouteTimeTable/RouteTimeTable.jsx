import React from 'react';
import './AvailableTimeTable.css';

const AvailableTimeTable = ({ courses }) => {
  console.log("Courses received in AvailableTimeTable:", courses);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const sortCourses = (courses) => {
    return courses.sort((a, b) => {
      const timeA = parseInt(a.startHour) * 60 + parseInt(a.startMinute);
      const timeB = parseInt(b.startHour) * 60 + parseInt(b.startMinute);
      return timeA - timeB;
    }); 
  };

  const calculateGaps = (courses) => {
    const gaps = [];
    for (let i = 0; i < courses.length - 1; i++) {
      const currentEnd = parseInt(courses[i].endHour) * 60 + parseInt(courses[i].endMinute);
      const nextStart = parseInt(courses[i + 1].startHour) * 60 + parseInt(courses[i + 1].startMinute);
      if (nextStart > currentEnd) {
        gaps.push({
          startHour: Math.floor(currentEnd / 60),
          startMinute: currentEnd % 60,
          endHour: Math.floor(nextStart / 60),
          endMinute: nextStart % 60,
        });
      }
    }
    return gaps;
  };

  return (
    <div className='available-time-table-container'>
      <div className="available-time-table">
        {days.map(day => (
          <div key={day} className={`${day}-column`}>
            <h3 className='day'>{day}</h3>
            {Array.isArray(courses) && sortCourses(courses.filter(course => course.weekday === day)).map((course, index, sortedCourses) => {
              const gaps = calculateGaps(sortedCourses);
              return (
                <React.Fragment key={index}>
                  <div className="course">
                    <p>{course.courseName}</p>
                    <p>{course.startHour}:{course.startMinute} - {course.endHour}:{course.endMinute}</p>
                  </div>
                  {index < sortedCourses.length - 1 && (
                    <div className="gap">
                      <p>Available Time</p>
                      <p>{gaps[index].startHour}:{gaps[index].startMinute} - {gaps[index].endHour}:{gaps[index].endMinute}</p>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableTimeTable;
