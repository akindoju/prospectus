import React from 'react';
import './Courses.css';

const DirEntrTwoScnd = (props) => {
  const { dirEntrTwoScnd } = props;

  return (
    <div className="courseContainer">
      {dirEntrTwoScnd.map((course) => {
        return (
          <div className="courseCard">
            <div className="courseCard__side courseCard__side--front">
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

export default DirEntrTwoScnd;
