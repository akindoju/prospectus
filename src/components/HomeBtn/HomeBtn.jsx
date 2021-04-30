import React from 'react';
import { useHistory } from 'react-router';

const HomeBtn = () => {
  const history = useHistory();

  return (
    <button
      className="homeBtn"
      onClick={(e) => {
        e.preventDefault();
        history.push('/');
      }}
    >
      <i class="fa fa-home" aria-hidden="true"></i>
    </button>
  );
};

export default HomeBtn;
