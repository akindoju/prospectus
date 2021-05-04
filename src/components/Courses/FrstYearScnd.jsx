import React from 'react';
import './Courses.css';

const FrstYearTwo = (props) => {
  const { firstYearScnd } = props;

  return (
    <div className="courseContainer">
      {firstYearScnd.map((course) => {
        return (
          <div className="courseCard">
            <div className="courseCard__side">
              <div className="courseCard__picture">&nbsp;</div>
              <div className="courseCard__details">
                <ul>
                  <li>
                    <span className="courseCode">{course.code}</span>
                    <span className="courseTitle">{course.title}</span>
                    <span className="courseCredit">{course.credit}Unit(s)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FrstYearTwo;
