import React from 'react';
import FrstYearFrst from '../../components/Courses/FrstYearFrst';
import '../../components/Courses/Courses.css';
import { firstYearFrst, firstYearScnd } from '../../coursesInformation';
import FrstYearScnd from '../../components/Courses/FrstYearScnd';
import HomeBtn from '../../components/HomeBtn/HomeBtn';

const FrstYear = () => {
  return (
    <div className="levelContainer">
      <HomeBtn />
      <header className="levelHeader">First Year / 100Level</header>

      {/* first semester */}
      <h2 className="semesterHeader">First Semester</h2>
      <FrstYearFrst firstYearFrst={firstYearFrst} />

      {/* second semester */}
      <h2 className="semesterHeader">Second Semester</h2>
      <FrstYearScnd firstYearScnd={firstYearScnd} />
    </div>
  );
};

export default FrstYear;
