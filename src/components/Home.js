import React from 'react'

import Activities from './Activities';
import AddActivity from './AddActivity';

const Home = () => {
  return (

    <>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/c8.jpg" height={500} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-dark">
              <h2>Add Exercise Activity on Daily Bases</h2>

            </div>
          </div>
          <div className="carousel-item">
            <img src="./images/c2.jpg" height={500} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-dark">
              <h2>Remove Completed Activity</h2>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./images/c3.jpg" height={500} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-dark">
              <h2>Update Activity</h2>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>



      <Activities />
      <AddActivity />

    </>
  );
}

export default Home