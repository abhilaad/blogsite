import React from "react";

export default function Navbar() {
  const month = [
    "Dec",
    "Nov",
    "Oct",
    "Sep",
    "Aug",
    "Jul",
    "Jun",
    "May",
    "Apr",
    "Mar",
    "Feb",
    "Jan",
  ];
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light nav-color">
        <div className="container">
          <a href="index.html" className="navbar-brand">
            Blog title
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="index.html" className="nav-link">
                  Home
                </a>
              </li>

              <li className="nav-item dropdown dropdown-sm">
                <a
                  href="#0"
                  className="nav-link dropdown-toggle"
                  id="archiveDropdown"
                  data-toggle="dropdown"
                >
                  Archive
                </a>
                <div className="dropdown-menu">
                  <h6 className="dropdown-header">2017</h6>
                  {month.map((item, index) => {
                    return (
                      <button key={index} className="dropdown-item">
                        {item}
                      </button>
                    );
                  })}
                </div>
              </li>
              <li className="nav-item">
                <a href="#0" className="nav-link">
                  About
                </a>
              </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
              <input
                type="text"
                name="search"
                className="form-control mr-sm-2 bg-light"
                placeholder="Search"
              />
              <button type="submit" className="btn btn-primary my-2 my-sm-0">
                <i className="fa fa-search" />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
