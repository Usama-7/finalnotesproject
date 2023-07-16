import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (

    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <div className="container-fluid">
          <Link style={{ color: "#554c86" }} className="navbar-brand" to="/">Exercise Tracker App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link style={{ color: "#554c86" }} className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link style={{ color: "#554c86" }} className="nav-link" to="/activities">Activities</Link>
              </li>
              <li className="nav-item">
                <Link style={{ color: "#554c86" }} className=" nav-link" to="/addactivity"><button style={{ color: "#554c86", borderColor: "#554c86" }} className='me-1'>+</button>Add Activity</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;