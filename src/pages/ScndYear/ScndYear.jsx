import React from 'react';
import '../../components/Courses/Courses.css';
import DirEntrTwoFrst from '../../components/Courses/DirEntrTwoFrst';
import DirEntrTwoScnd from '../../components/Courses/DirEntrTwoScnd';
import ElecTwoFrst from '../../components/Courses/ElecTwoFrst';
import ElecTwoScnd from '../../components/Courses/ElecTwoScnd';
import ScndYearFrst from '../../components/Courses/ScndYearFrst';
import ScndYearScnd from '../../components/Courses/ScndYearScnd';
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
      <header className="levelHeader">Second Year / 200Level</header>

      {/* first semester */}
      <h2 className="semesterHeader">First Semester</h2>
      <ScndYearFrst secondYearFrst={secondYearFrst} />
      {/* Direct Entry */}
      <h2 className="semesterHeader">Compulsory for Direct Entry</h2>
      <DirEntrTwoFrst dirEntrTwoFrst={dirEntrTwoFrst} />
      {/* Electives */}
      <h2 className="semesterHeader">Electives</h2>
      <ElecTwoFrst elecTwoFrst={elecTwoFrst} />

      {/* second semester */}
      <h2 className="semesterHeader">Second Semester</h2>
      <ScndYearScnd secondYearScnd={secondYearScnd} />
      {/* Direct Entry */}
      <h2 className="semesterHeader">Compulsory for Direct Entry</h2>
      <DirEntrTwoScnd dirEntrTwoScnd={dirEntrTwoScnd} />
      {/* Electives */}
      <h2 className="semesterHeader">Electives</h2>
      <ElecTwoScnd elecTwoScnd={elecTwoScnd} />
    </div>
  );
};

export default ScndYear;
