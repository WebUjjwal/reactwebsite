import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section id='footer_bg'>
      <div className="container footer">
        <div className="row">
          <div className="col-md-4">
            <img src="./img/logo.png" className="img-fluid" alt="logo" />
            <p className="footer_para">
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
              suspendisse.
            </p>
          </div>

          <div className="col-md-1"></div>

          <div className="col-md-2 footer_menu">
            <h4>Explore</h4>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>{" "}
            </li>
            <li>
              <NavLink exact to="/about">
                About
              </NavLink>{" "}
            </li>
            <li>
              <NavLink exact to="/given">
                Given
              </NavLink>{" "}
            </li>
            <li>
              <NavLink exact to="/contact">
                Contact
              </NavLink>{" "}
            </li>
          </div>

          <div className="col-md-2 footer_menu">
            <h4>Resource</h4>
            <li>
              <NavLink exact to="/">
                Our Services
              </NavLink>{" "}
            </li>
            <li>
              <NavLink exact to="/">
                Our Scientists
              </NavLink>{" "}
            </li>
            <li>
              <NavLink exact to="/">
                Testimonials
              </NavLink>{" "}
            </li>
            <li>
              <NavLink exact to="/">
                Sass Solution
              </NavLink>{" "}
            </li>
          </div>

          <div className="col-md-3 footer_menu">
            <h4>Address</h4>
            <li>
              <span>75 5th Ave, New York, NY 10010, United States</span>
            </li>
            <li>
              <NavLink exact to="/">
              +1 (123) 456 7890
              </NavLink>{" "}
            </li>
            <li>
              <NavLink exact to="/">
              hello@rewy.com
              </NavLink>{" "}
            </li>
            <li>
              <NavLink exact to="/">
              +55 785 4578964
              </NavLink>{" "}
            </li>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Footer;
