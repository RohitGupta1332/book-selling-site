import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {NavLink, useNavigate} from 'react-router-dom'
import { FaCartArrowDown } from "react-icons/fa";
import { searchBook } from '../hooks/searchBook';
import { useState } from 'react';
import ResultSearch from './ResultSearch';

function Header() {

  const [data, setData] = useState('')
  const navigate = useNavigate()

  const handleOnClick = (e) => {
    e.preventDefault();
    navigate(`/search/${data}`)
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" href="#" style={{ color: "#a6a65a", fontWeight: "bolder" }}>BookHive</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" href="#">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/allbooks">Books</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categories
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/categories/horror">Horror</NavLink></li>
                <li><NavLink className="dropdown-item" to="/categories/mysteries">Mysteries</NavLink></li>
                <li><NavLink className="dropdown-item" to="/categories/finance">Finance</NavLink></li>
                <li><NavLink className="dropdown-item" to="/categories/religious">Religious</NavLink></li>
                <li><NavLink className="dropdown-item" to="/categories/health">Health/Fitness</NavLink></li>
                <li><NavLink className="dropdown-item" to="/categories/kids">Kids</NavLink></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">Cart <FaCartArrowDown /></NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setData(e.target.value)} />
            <button className="btn btn-outline-success" type="submit" onClick={(e) => handleOnClick(e)}>Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}
export default Header;