import React from 'react';
import './Courses.css';

const FrstSem = (props) => {
  const { firstYear } = props;

  return (
    <div className="courseContainer">
      {firstYear.map((course) => {
        return (
          <div className="courseCard">
            <div className="courseCard__side courseCard__side--front">
              <div className="courseCard__picture">&nbsp;</div>
              <div className="courseCard__details">
                <ul>
                  <li>{course}</li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FrstSem;
