/**
 * Created by herisetiawan on 2/16/17.
 */
import React from 'react';
import {
  Row,
  Column
} from 'react-foundation';

const FilterInfo = (props) => {
  return (
    props.text ?
      (
        <Row className="contain-filter-info">
          <Column large={12}>
            <span>
              {
                props.length ?
                'Showing Pokemons with type: ' : 'No Pokemon founds with type: '
              }
              <strong className="label">{props.text}</strong></span>
          </Column>
        </Row>
      ) : null
  );
};

export default FilterInfo;
