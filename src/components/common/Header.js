/**
 * Created by herisetiawan on 2/16/17.
 */
import React from 'react';
import { IndexLink } from 'react-router';
import {
  Row,
  Column
} from 'react-foundation';

const Header = () => {
  return (
    <div className="contain-header">
      <div className="top-bar">
        <Row>
          <Column large={12}>
            <div className="top-bar-left">
              <IndexLink to="/" activeClassName="active">
                <h1>Pokedex</h1>
              </IndexLink>
            </div>
            <div className="top-bar-right">
              <ul className="menu">
                <li><input type="search" placeholder="Search" /></li>
              </ul>
            </div>
          </Column>
        </Row>
      </div>
    </div>
  );
};

export default Header;
