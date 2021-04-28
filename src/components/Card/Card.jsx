import React from 'react';
import LevelsInformation from '../../levelsInformation';
import './Card.css';

const Card = () => {
  return (
    <div>
      {LevelsInformation.map((level) => {
        return (
          <div className="col-1-of-4">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading--span card__heading--span">
                    {level.year}
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>{level.first}</li>
                    <li>{level.second}</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back">
                <div className="card__cta">
                  <button className="btn btn--white">{level.first}</button>
                  <button className="btn btn--white">{level.second}</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
