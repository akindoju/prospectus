import React from 'react';
import { firstYearFrst, firstYearScnd } from '../../coursesInformation';
import HomeBtn from '../../components/HomeBtn/HomeBtn';
import Courses from '../../components/Courses/Courses';

const FrstYear = () => {
  return (
    <div className="levelContainer">
      <HomeBtn />
      <header className="levelHeader">First Year / 100Level</header>

      {/* first semester */}
      <h2 className="semesterHeader">First Semester</h2>
      <Courses courses={firstYearFrst} />

      {/* second semester */}
      <h2 className="semesterHeader">Second Semester</h2>
      <Courses courses={firstYearScnd} />
    </div>
  );
};

export default FrstYear;
