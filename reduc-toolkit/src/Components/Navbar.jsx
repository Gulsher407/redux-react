import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {
  const allusers = useSelector(state => state.app.users);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter users based on search term
  const filteredUsers = allusers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand"> Gulsher</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Create Post
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/read" className={`nav-link ${searchTerm && filteredUsers.length === 0 ? 'text-danger' : ''}`}>
                All Posts ({allusers.length})
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/read" className={`nav-link ${searchTerm && filteredUsers.length > 0 ? 'text-success' : ''}`}>
                Match Data ({filteredUsers.length})
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
