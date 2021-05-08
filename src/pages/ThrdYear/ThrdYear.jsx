import React from 'react';
import {
  thirdYearFrst,
  thirdYearScnd,
  elecThree,
} from '../../coursesInformation';
import HomeBtn from '../../components/HomeBtn/HomeBtn';
import Courses from '../../components/Courses/Courses';

const ThrdYear = () => {
  return (
    <div className="levelContainer">
      <HomeBtn />
      <header className="levelHeader">Third Year / 300Level</header>

      {/* first semester */}
      <h2 className="semesterHeader">First Semester</h2>
      <Courses courses={thirdYearFrst} />

      {/* Electives */}
      <h2 className="semesterHeader">Electives</h2>
      <Courses courses={elecThree} />

      {/* second semester */}
      <h2 className="semesterHeader">Second Semester</h2>
      <Courses courses={thirdYearScnd} />
    </div>
  );
};

export default ThrdYear;
