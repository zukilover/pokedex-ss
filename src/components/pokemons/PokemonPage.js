/**
 * Created by herisetiawan on 2/16/17.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import PokemonList from './PokemonList';
import { loadPokemons } from '../../actions/pokemonActions';
import FilterInfo from '../common/FilterInfo';

class PokemonPage extends React.Component {
  loadList(){
    this.props.dispatch(loadPokemons())
  }

  render() {
    const pokemons = this.props.filter.text ? this.props.filter.list : this.props.pokemons;
    const hasMore = this.props.loadParams.hasMore;
    return(
      <div className="contain-list-pokemons">
        <FilterInfo text={this.props.filter.text} length={pokemons.length} />
        <div className="col-md-12">
          <PokemonList pokemons={pokemons} hasMore={hasMore} loadPokemons={this.loadList.bind(this)} />
        </div>
      </div>
    )
  }
}

PokemonPage.propTypes = {
  pokemons: PropTypes.array.isRequired,
  loadParams: PropTypes.object.isRequired,
  filter: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    pokemons: state.pokemons,
    loadParams: state.loadParams,
    filter: state.filter
  };
}

export default connect(mapStateToProps)(PokemonPage);
