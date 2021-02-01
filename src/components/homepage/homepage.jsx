import React from 'react';
import Header from '../header/header';
import './homepage.css';
import heading from './heading.jpg';

const Homepage = () => {
  return (
    <div>
      <Header />
      <div class="container">
        <img class="cover" src={heading} title="Computer Science" alt="cover" />
      </div>
      <p class="heading">Department of Computer Science</p>
      <p class="bodying">
        This website was created simply to aid students, be it new or existing,
        to have a rundown of all courses, first year to final year, and provide
        them with with details about each course.
      </p>
      <p class="heading2">Our Exclusive Services</p>
      <p class="bodying2">
        From below onward is a categorization of each year a students goes
        through, with each corse expected there of.
      </p>
    </div>
  );
};

export default Homepage;
