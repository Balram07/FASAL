import React from "react";

//UI
//import logo from "../../Images/logo.svg";
//import SearchBar from "../../Components/Layout/SearchBar";

function SignedoutNav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <div className="nav-section">
            <a className="nav-link" href="#">
              HOME
            </a>
          </div>
          <div className="nav-section">
            <a className="nav-link" href="/classroom">
              CLASSROOM
            </a>
          </div>
          <div className="nav-section">
            <a className="nav-link" href="/features">
              FEATURES
            </a>
          </div>
          <div className="nav-section">
            <a className="nav-link" href="/digital-pathway">
              DIGITAL PATHWAY
            </a>
          </div>
          <div className="nav-section">
            <a className="nav-link" href="community-development">
              COMMUNITY DEVELOPMENT
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SignedoutNav;
