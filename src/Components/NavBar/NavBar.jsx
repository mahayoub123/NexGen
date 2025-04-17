import React from "react";
import logo from "../../assets/images/logo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <section className="navBox">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="linksContainer">
          <ul>
            <li>
              <button className="btnStyle2">
                {" "}
                <a href="#">HOME</a>
              </button>
            </li>
            <li>
              {" "}
              <button className="btnStyle2">
                {" "}
                <a href="#">SERVICES</a>
              </button>
            </li>
            <li>
              {" "}
              <button className="btnStyle2">
                {" "}
                <a href="#">PROJECTS</a>
              </button>
            </li>
            <li>
              {" "}
              <button className="btnStyle2">
                {" "}
                <a href="#">ABOUT</a>
              </button>
            </li>
            <li>
              <button className="btnStyle2">
                {" "}
                <a href="#">CAREERS</a>
              </button>
            </li>
            <li>
              {" "}
              <button className="btnStyle2">
                {" "}
                <a href="#">BLOGS</a>
              </button>
            </li>
            <li>
              {" "}
              <button className="btnStyle">
                {" "}
                <a href="#">CONTACT US</a>
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default NavBar;
