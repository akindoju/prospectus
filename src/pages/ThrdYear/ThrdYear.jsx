import React from 'react';
import ThrdYearFrst from '../../components/Courses/ThrdYearFrst';
import ElecThree from '../../components/Courses/ElecThree';
import {
  thirdYearFrst,
  thirdYearScnd,
  elecThree,
} from '../../coursesInformation';
import ThrdYearScnd from '../../components/Courses/ThrdYearScnd';
import HomeBtn from '../../components/HomeBtn/HomeBtn';

const ThrdYear = () => {
  return (
    <div className="levelContainer">
      <HomeBtn />
      <header className="levelHeader">Third Year / 300Level</header>

      {/* first semester */}
      <h2 className="semesterHeader">First Semester</h2>
      <ThrdYearFrst thirdYearFrst={thirdYearFrst} />
      {/* Electives */}
      <h2 className="semesterHeader">Electives</h2>
      <ElecThree elecThree={elecThree} />

      {/* second semester */}
      <h2 className="semesterHeader">Second Semester</h2>
      <ThrdYearScnd thirdYearScnd={thirdYearScnd} />
    </div>
  );
};

export default ThrdYear;
