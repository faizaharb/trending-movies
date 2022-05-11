import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.module.css'

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light shadow fixed-top w-100">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="home">Noxe</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="movies">Movies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="tvshows">Tv Shows</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="people">People</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">About</Link>
              </li>
            </ul>
            <ul className='list-unstyled d-flex m-0'>
              <div className="social-links d-flex align-items-center">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram mx-3"></i>
                <i className="fab fa-youtube"></i>
              </div>
              <li className="nav-item">
                <Link className="nav-link" to="login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="register">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="login">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}
