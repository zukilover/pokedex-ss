/**
 * Created by herisetiawan on 2/16/17.
 */
import React from 'react';
import { IndexLink } from 'react-router';

const Header = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="dropdown menu">
          <li className="menu-text" role="menuitem">
            <IndexLink to="/" activeClassName="active">
              <strong>All Pokemons</strong>
            </IndexLink>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li><input type="search" placeholder="Search" /></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
