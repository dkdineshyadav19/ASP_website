import React from 'react'
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  return (
    <>
        <nav className=" m-2  navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <Link className="navbar-brand text-success fw-bold brand-name" to="/">ASP</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="#employment">EMPLOYMENT</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link " to="#saksham"  >SAKSHAM</Link>
        </li>
      </ul>
      <form className="d-flex">
        <Link to="#call" className="btn btn-success" >CONTACT</Link>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
