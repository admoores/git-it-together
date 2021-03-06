import React from 'react';
import { Link } from 'react-router'

var Nav = ({profile, logout, handleProjectListEntryClick, current}) => (
  <nav className='navbar navbar-light bg-faded'>
    <div className='navbar-header'>
      <div className="dropdown">
          <Link  to='/' style={{ textDecoration: 'none', color: 'black' }}>
        <img src="/client/assets/git2gether.png" className="navbar-brand dropdown" alt="unicorn head" onClick={() => handleProjectListEntryClick(null)}/>
          </Link>
              <div className="card dropdown-content">
          {/* <img className="card-img-top" src={profile.picture} alt="profile picture" /> */}
          <div className="card-block">
            <h4 className="card-title">{profile.name}</h4>
            <p className="caption">
              <small>{profile.nickname}</small>
            </p>
            <hr/>
            <button onClick={logout} className="btn btn-primary">Sign Out</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

module.exports = Nav;
