import React from 'react';
import { useHistory } from 'react-router';
import LevelsInformation from '../../levelsInformation';
import './Card.css';

const Card = () => {
  const history = useHistory();

  return (
    <div>
      {LevelsInformation.map((level) => {
        return (
          <div className="col-1-of-4">
            <div
              className="card"
              onClick={(event) => {
                event.preventDefault();
                history.push(`/${level.path}`);
              }}
            >
              <div className="card__side--front">
                <div className="card__picture">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading--span">{level.year}</span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li key={level.keyOne}>{level.first}</li>
                    <li key={level.keyTwo}>{level.second}</li>
                  </ul>
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
