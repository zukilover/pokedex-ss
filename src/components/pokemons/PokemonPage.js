/**
 * Created by herisetiawan on 2/16/17.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import PokemonList from './PokemonList';
import { loadPokemons } from '../../actions/pokemonActions';

class PokemonPage extends React.Component {
  loadList(){
    this.props.dispatch(loadPokemons())
  }

  render() {
    const pokemons = this.props.pokemons;
    const hasMore = this.props.loadParams.hasMore;
    return(
      <div className="col-md-12">
        <PokemonList pokemons={pokemons} hasMore={hasMore} loadPokemons={this.loadList.bind(this)} />
      </div>
    )
  }
}

PokemonPage.propTypes = {
  pokemons: PropTypes.array.isRequired,
  loadParams: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    pokemons: state.pokemons,
    loadParams: state.loadParams
  };
}

export default connect(mapStateToProps)(PokemonPage);
