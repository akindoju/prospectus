import React from 'react';
import './LevelSection.css';

const LevelSection = () => {
  return (
    <section class="section-features">
      <div class="row">
        <div class="col-1-of-4">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--3">&nbsp;</div>
              <h4 class="card__heading">
                <span class="card__heading--span card__heading--span--3">
                  First Year
                </span>
              </h4>
              <div class="card__details">
                <ul>
                  <li>First Semester</li>
                  <li>Second Semester</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back--3">
              <div class="card__cta">
                <button class="btn btn--white">First Semester</button>
                <button class="btn btn--white">Second Semester</button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-1-of-4">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--3">&nbsp;</div>
              <h4 class="card__heading">
                <span class="card__heading--span card__heading--span--3">
                  Second Year
                </span>
              </h4>
              <div class="card__details">
                <ul>
                  <li>First Semester</li>
                  <li>Second Semester</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back--3">
              <div class="card__cta">
                <button class="btn btn--white">First Semester</button>
                <button class="btn btn--white">Second Semester</button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-1-of-4">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture">&nbsp;</div>
              <h4 class="card__heading">
                <span class="card__heading--span card__heading--span">
                  Third Year
                </span>
              </h4>
              <div class="card__details">
                <ul>
                  <li>First Semester</li>
                  <li>SIWES Industrial Training</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back">
              <div class="card__cta">
                <button class="btn btn--white">First Semester</button>
                <button class="btn btn--white">
                  SIWES Industrial Training
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-1-of-4">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture">&nbsp;</div>
              <h4 class="card__heading">
                <span class="card__heading--span card__heading--span">
                  Final Year
                </span>
              </h4>
              <div class="card__details">
                <ul>
                  <li>First Semester</li>
                  <li>Second Semester</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back">
              <div class="card__cta">
                <button class="btn btn--white">First Semester</button>
                <button class="btn btn--white">Second Semester</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LevelSection;
