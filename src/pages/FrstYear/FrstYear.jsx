import React from 'react';
import { firstYearFrst, firstYearScnd } from '../../coursesInformation';
import HomeBtn from '../../components/HomeBtn/HomeBtn';

const FrstYear = () => {
  return (
    <div className="levelContainer">
      <HomeBtn />
      <header className="levelHeader">First Year / 100Level</header>

      {/* first semester */}
      <h2 className="semesterHeader">First Semester</h2>
      <div className="courseContainer">
        {firstYearFrst.map((course) => {
          return (
            <div className="courseCard">
              <div className="courseCard__side courseCard__side--front">
                <div className="courseCard__picture">&nbsp;</div>
                <div className="courseCard__details">
                  <ul>
                    <li>
                      <span className="courseCode">{course.code}</span>
                      {course.title}
                      <span className="courseCredit">
                        {course.credit}Unit(s)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* second semester */}
      <h2 className="semesterHeader">Second Semester</h2>
      <div className="courseContainer">
        {firstYearScnd.map((course) => {
          return (
            <div className="courseCard">
              <div className="courseCard__side courseCard__side--front">
                <div className="courseCard__picture">&nbsp;</div>
                <div className="courseCard__details">
                  <ul>
                    <li>
                      <span className="courseCode">{course.code}</span>
                      {course.title}
                      <span className="courseCredit">
                        {course.credit}Unit(s)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FrstYear;
