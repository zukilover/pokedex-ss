import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {
  Colors,
  Button,
  Column
} from 'react-foundation';
import { loadPokemonDetail } from '../../actions/pokemonActions';

class PokemonListItem extends React.Component {
  componentDidMount(){
    this.props.dispatch(loadPokemonDetail(this.props.pokemon.name));
  }

  render() {
    const pokemon   = this.props.pokemon;
    const details   = this.props.details;
    const thumbnail = details[pokemon.name] ? details[pokemon.name].sprites.front_shiny : 'images/noun_560380_cc.png';
    return(
    <Column large={3}>
      <div className="card">
        <div className="card-section text-center">
          <h4>{this.props.pokemon.name}</h4>
          <Link to={'/pokemon/' + pokemon.name}>
            <p className="contain-thumbnail"><img src={thumbnail} /></p>
            <Button color={Colors.PRIMARY} isDisabled={!details[pokemon.name]}>Lihat detail</Button>
          </Link>
        </div>
      </div>
    </Column>
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
