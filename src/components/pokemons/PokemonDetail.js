/**
 * Created by herisetiawan on 2/16/17.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setPokemonDetail } from '../../actions/pokemonActions';
import { Row, Column } from 'react-foundation';
import { Link } from 'react-router';

class PokemonDetail extends React.Component {
  componentDidMount(){
    const details = this.props.details;
    const name = this.props.params.name;
    this.props.dispatch(setPokemonDetail(details[name]));
  }

  render() {
    let details   = this.props.details;
    let pokemon   = this.props.detail;
    let thumbnail = details[pokemon.name] ? details[pokemon.name].sprites.front_shiny : '../images/noun_560380_cc.png';
    return (
      <Row className="contain-detail">
        <Column large={3}>
          <div className="card">
            <div className="card-section text-center">
              <h4>{pokemon.name}</h4>
              <Link to={'/pokemon/' + pokemon.name}>
                <p className="contain-thumbnail"><img src={thumbnail} /></p>
              </Link>
            </div>
          </div>
        </Column>
        <Column large={9}>
          <table className="stack">
            <thead>
            <tr>
              <th>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <p className="text-loading">.............. ....... ..................</p>
                <p className="text-loading">................. ............. .....</p>
              </td>
            </tr>
            </tbody>
          </table>
        </Column>
      </Row>
    );
  }
}

PokemonDetail.propTypes = {
  details: PropTypes.array.isRequired,
  detail: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    details: state.details,
    detail: state.detail
  }
}

export default connect(mapStateToProps)(PokemonDetail);
