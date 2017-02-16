/**
 * Created by herisetiawan on 2/16/17.
 */
import React from 'react';
import { Link } from 'react-router';
import {
  Column
} from 'react-foundation';

const BreadCrumb = (props) => {
  return (
    <div className="contain-breadcrumb">
      <Column large={12}>
        <nav role="navigation">
          <ul className="breadcrumbs">
            <li><Link to={'/'}>All Pokemons</Link></li>
            <li className="disabled">{props.name}</li>
          </ul>
        </nav>
      </Column>
    </div>
  );
};

export default BreadCrumb;
