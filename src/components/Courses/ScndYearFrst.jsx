import React from 'react';
import './Courses.css';

const ScndYearFrst = (props) => {
  const { secondYearFrst } = props;

  return (
    <div className="courseContainer">
      {secondYearFrst.map((course) => {
        return (
          <div className="courseCard">
            <div className="courseCard__side courseCard__side--front">
              <div className="courseCard__picture">&nbsp;</div>
              <div className="courseCard__details">
                <ul>
                  <li>
                    <span className="courseCode">{course.code}</span>
                    {course.title}
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

export default ScndYearFrst;
