/**
 * Created by herisetiawan on 2/16/17.
 */
import React, { PropTypes } from 'react';
import { Row } from 'react-foundation';

const PokemonList = ({pokemons}) => {
  return (
    <Row className="display">
    </Row>
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired
};

export default PokemonList;
