import React from 'react'
import { Link } from "react-router-dom";


const Footer = () => {
  return (

    <>
      <div className="footer">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <div className="footer_menu">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/activities">Activities</Link></li>
                  <li><Link to="/addactivity">Add Activity</Link></li>

                </ul>
              </div>
              <div className="footer_copyright ">
                <p>© 2023 . All Rights Reserved.</p>
              </div>
              <div className="footer_profile">
                <ul>
                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-instagram" /></a></li>
                  <li><a href="#"><i className="fa fa-pinterest" /></a></li>
                </ul>
              </div>
            </div>{/*- END COL */}
          </div>{/*- END ROW */}
        </div>{/*- END CONTAINER */}
      </div>
    </>
  );
}

export default Footer