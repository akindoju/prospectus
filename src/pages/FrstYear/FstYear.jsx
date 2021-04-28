import React from 'react';
import FrstSem from '../../components/Courses/FrstSem';
import '../../components/Courses/Courses.css';
import { firstYearOne } from '../../coursesInformation';
import { firstYearTwo } from '../../coursesInformation';
import ScndSem from '../../components/Courses/ScndSem';

const FrstYear = () => {
  return (
    <div className="levelContainer">
      <header className="levelHeader">First Year / 100Level</header>

      {/* first semester */}
      <h2 className="semesterHeader">First Semester</h2>
      <FrstSem firstYearOne={firstYearOne} />

      {/* second semester */}
      <h2 className="semesterHeader">Second Semester</h2>
      <ScndSem firstYearTwo={firstYearTwo} />
    </div>
  );
};

export default FrstYear;
