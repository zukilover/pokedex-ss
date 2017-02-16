import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {
  Colors,
  Button
} from 'react-foundation';
import { loadPokemonDetail } from '../../actions/pokemonActions';
import PokemonItem from './PokemonItem';
import _ from 'lodash';

class PokemonListItem extends React.Component {
  componentDidMount(){
    this.props.dispatch(loadPokemonDetail(this.props.pokemon.name));
  }

  render() {
    const pokemon   = this.props.pokemon;
    const details   = this.props.details;
    const detail    = _.filter(details, { 'name' : pokemon.name })[0];
    const thumbnail = detail ? detail.sprites.front_shiny : 'images/noun_560380_cc.png';
    return(
      <PokemonItem pokemon={pokemon}>
        <Link to={'/pokemon/' + pokemon.name}>
          <p className="contain-thumbnail"><img src={thumbnail} /></p>
          <Button color={Colors.PRIMARY} isDisabled={!detail}>Lihat detail</Button>
        </Link>
      </PokemonItem>
    )
  }
}


PokemonListItem.propTypes = {
  pokemon: PropTypes.object.isRequired,
  details: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    details: state.details
  }
}

export default connect(mapStateToProps)(PokemonListItem);
