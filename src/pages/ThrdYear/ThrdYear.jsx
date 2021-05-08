import React from 'react';
import {
  thirdYearFrst,
  thirdYearScnd,
  elecThree,
} from '../../coursesInformation';
import HomeBtn from '../../components/HomeBtn/HomeBtn';

const ThrdYear = () => {
  return (
    <div className="levelContainer">
      <HomeBtn />
      <header className="levelHeader">Third Year / 300Level</header>

      {/* first semester */}
      <h2 className="semesterHeader">First Semester</h2>
      <div className="courseContainer">
        {thirdYearFrst.map((course) => {
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
      {/* Electives */}
      <h2 className="semesterHeader">Electives</h2>
      <div className="courseContainer">
        {elecThree.map((course) => {
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
        {thirdYearScnd.map((course) => {
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

export default ThrdYear;
