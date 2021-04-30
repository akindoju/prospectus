import React from 'react';
import ElecFour from '../../components/Courses/ElecFour';
import FnlYearFirst from '../../components/Courses/FnlYearFirst';
import FnlYearScnd from '../../components/Courses/FnlYearScnd';
import {
  finalYearFrst,
  finalYearScnd,
  elecFour,
} from '../../coursesInformation';

const FnlYear = () => {
  return (
    <div className="levelContainer">
      <header className="levelHeader">Final Year / 400Level</header>

      {/* first semester */}
      <h2 className="semesterHeader">First Semester</h2>
      <FnlYearFirst finalYearFrst={finalYearFrst} />
      {/* Electives */}
      <h2 className="semesterHeader">Electives</h2>
      <ElecFour elecFour={elecFour} />

      {/* second semester */}
      <h2 className="semesterHeader">Second Semester</h2>
      <FnlYearScnd finalYearScnd={finalYearScnd} />
    </div>
  );
};

export default FnlYear;
