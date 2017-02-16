/**
 * Created by herisetiawan on 2/16/17.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import PokemonList from './PokemonList';

class PokemonPage extends React.Component {
  render() {
    const pokemons = this.props.pokemons;
    return(
      <div className="col-md-12">
        <PokemonList pokemons={pokemons} />
      </div>
    )
  }
}

PokemonPage.propTypes = {
  pokemons: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    pokemons: state.pokemons
  };
}

export default connect(mapStateToProps)(PokemonPage);
