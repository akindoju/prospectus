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
import Courses from '../../components/Courses/Courses';

const ScndYear = () => {
  return (
    <div className="levelContainer">
      <HomeBtn />
      <header className="levelHeader">Second Year / 200Level</header>

      {/* first semester */}
      <h2 className="semesterHeader">First Semester</h2>
      <Courses courses={secondYearFrst} />
      {/* Direct Entry */}
      <h2 className="semesterHeader">Compulsory for Direct Entry</h2>
      <Courses courses={dirEntrTwoFrst} />
      {/* Electives */}
      <h2 className="semesterHeader">Electives</h2>
      <Courses courses={elecTwoFrst} />

      {/* second semester */}
      <h2 className="semesterHeader">Second Semester</h2>
      <Courses courses={secondYearScnd} />
      {/* Direct Entry */}
      <h2 className="semesterHeader">Compulsory for Direct Entry</h2>
      <Courses courses={dirEntrTwoScnd} />
      {/* Electives */}
      <h2 className="semesterHeader">Electives</h2>
      <Courses courses={elecTwoScnd} />
    </div>
  );
};

export default ScndYear;
