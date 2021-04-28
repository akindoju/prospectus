import React from 'react';
import FrstSem from '../../components/Courses/FrstSem';
import '../../components/Courses/Courses.css';
import { firstYear } from '../../coursesInformation';
import { secondYear } from '../../coursesInformation';

const FrstYear = () => {
  return (
    <div className="levelContainer">
      <header className="levelHeader">First Year / 100Level</header>

      {/* first semester */}
      <h2 className="semesterHeader">First Semester</h2>
      <FrstSem firstYear={firstYear} />

      {/* second semester */}
      {/* <div>
        <h1>Second Semester</h1>
        <Courses secondYear={secondYear} />
      </div> */}
    </div>
  );
};

export default FrstYear;
