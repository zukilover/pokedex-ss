import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {
  Colors,
  Button,
  Column
} from 'react-foundation';

class PokemonListItem extends React.Component {
  render() {
    const pokemon   = this.props.pokemon;
    return(
    <Column large={3}>
      <div className="card">
        <div className="card-section text-center">
          <h4>{this.props.pokemon.name}</h4>
          <Link to={'/pokemon/' + pokemon.name}>
            <Button color={Colors.PRIMARY}>Lihat detail</Button>
          </Link>
        </div>
      </div>
    </Column>
    )
  }
}


PokemonListItem.propTypes = {
  pokemon: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(PokemonListItem);
