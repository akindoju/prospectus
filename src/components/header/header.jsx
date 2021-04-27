import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">
              Benson Idahosa University
            </span>
            <span className="heading-primary--sub">
              Computer Science Prospectus
            </span>
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Header;
