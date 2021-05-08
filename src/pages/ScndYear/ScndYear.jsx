import React from 'react';
import HomeBtn from '../../components/HomeBtn/HomeBtn';
import {
  secondYearFrst,
  secondYearScnd,
  dirEntrTwoFrst,
  dirEntrTwoScnd,
  elecTwoFrst,
  elecTwoScnd,
} from '../../coursesInformation';

const ScndYear = () => {
  return (
    <div className="levelContainer">
      <HomeBtn />
      <header className="levelHeader">Second Year / 200Level</header>

      {/* first semester */}
      <h2 className="semesterHeader">First Semester</h2>
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
      {/* Direct Entry */}
      <h2 className="semesterHeader">Compulsory for Direct Entry</h2>
      <div className="courseContainer">
        {dirEntrTwoFrst.map((course) => {
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
        {elecTwoFrst.map((course) => {
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
        {secondYearScnd.map((course) => {
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
      {/* Direct Entry */}
      <h2 className="semesterHeader">Compulsory for Direct Entry</h2>
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
        {elecTwoScnd.map((course) => {
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

export default ScndYear;
