/**
 * Created by herisetiawan on 2/16/17.
 */
import React, { PropTypes } from 'react';
import { Row } from 'react-foundation';
import Equalizer from 'react-equalizer';
import PokemonListItem from './PokemonListItem';

const PokemonList = ({pokemons}) => {
  return (
    <Row className="display">
      <Equalizer>
        {pokemons.map(pokemon =>
          <PokemonListItem large={3} key={pokemon.name} pokemon={pokemon} />
        )}
      </Equalizer>
    </Row>
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired
};

export default PokemonList;
