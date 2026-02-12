import React from 'react'
import { Link } from 'react-router-dom';

export const 
Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
            Navbar
        </a>
        <button className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>

        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/netflixhome">
                Netflix Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/netflixshows">
                Shows
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/netflixmovies">
                Movies
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/teamDetails">
                IPL TEAMS
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/fuctiondemo1">
                FunctionDemo
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/UseStateDemo1">
                UseStateDemo1
              </Link>
            </li>
             <li className="nav-item active">
              <Link className="nav-link" to="/UseStateDemo2">
                UseStateDemo2
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/UseStateDemo3">
                UseStateDemo3
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/Employees">
                Employees
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/Props1">
                Props1
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/input">
                Input
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/form1">
                Form1
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/form2">
                Form2
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/form3">
                Form3
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  );
};