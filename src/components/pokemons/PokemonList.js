/**
 * Created by herisetiawan on 2/16/17.
 */
import React, { PropTypes } from 'react';
import { Row } from 'react-foundation';
import Equalizer from 'react-equalizer';
import InfiniteScroll from 'react-infinite-scroller';
import PokemonListItem from './PokemonListItem';

const PokemonList = ({hasMore, loadPokemons, pokemons}) => {
  const allPokemons = pokemons.map(pokemon =>
    <PokemonListItem large={3} key={pokemon.name} pokemon={pokemon} />
  );
  return (
    <Row className="display">
      <Equalizer>
        <InfiniteScroll
          pageStart={0}
          loadMore={loadPokemons}
          hasMore={hasMore}
          loader={<div className="loader">Loading ...</div>}
        >
        {allPokemons}
        </InfiniteScroll>
      </Equalizer>
    </Row>
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired
};

export default PokemonList;
