import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
      <header class="header">
        <div class="header__text-box">
          <h1 class="heading-primary">
            <span class="heading-primary--main">Benson Idahosa University</span>
            <span class="heading-primary--sub">
              Computer Science Prospectus
            </span>
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Header;
