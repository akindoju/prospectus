import React from 'react';
import HomeBtn from '../../components/HomeBtn/HomeBtn';
import {
  finalYearFrst,
  finalYearScnd,
  elecFour,
} from '../../coursesInformation';
import Courses from '../../components/Courses/Courses';

const FnlYear = () => {
  return (
    <div className="levelContainer">
      <HomeBtn />
      <header className="levelHeader">Final Year / 400Level</header>

      {/* first semester */}
      <h2 className="semesterHeader">First Semester</h2>
      <Courses courses={finalYearFrst} />
      {/* Electives */}
      <h2 className="semesterHeader">Electives</h2>
      <Courses courses={elecFour} />

      {/* second semester */}
      <h2 className="semesterHeader">Second Semester</h2>
      <Courses courses={finalYearScnd} />
    </div>
  );
};

export default FnlYear;
