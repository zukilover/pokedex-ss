/**
 * Created by herisetiawan on 2/16/17.
 */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setPokemonDetail, getPokemonSpec } from '../../actions/pokemonActions';
import { Row, Column } from 'react-foundation';
import StatBox from '../common/StatBox';
import StatWidget from '../widgets/StatWidget';
import StatMeter from '../widgets/StatMeter';
import PokemonItem from './PokemonItem';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
    this.details = props.details;
    this.name = props.params.name;
  }
  componentWillMount(){
    this.props.dispatch(setPokemonDetail(this.details[this.name]));
  }

  componentDidMount(){
    this.props.dispatch(getPokemonSpec(this.details[this.name].id));
  }

  render() {
    let pokemon = this.props.detail;
    let isFetchingSpec = this.props.spec.isFetching;
    let thumbnail = pokemon.sprites ? pokemon.sprites.front_shiny : '../images/noun_560380_cc.png';
    return (
      <Row className="contain-detail">
        <PokemonItem pokemon={pokemon} isDetail>
          <p className="contain-thumbnail"><img src={thumbnail} /></p>
        </PokemonItem>
        <Column large={9}>
          <StatBox title="Description" loading={isFetchingSpec} isLong icon="align-left">
            <p>
              {
                this.props.spec.flavor_text_entries ?
                this.props.spec.flavor_text_entries[1].flavor_text : null
              }
            </p>
          </StatBox>
          <StatWidget content={pokemon} />
          <StatMeter content={pokemon.stats} />
        </Column>
      </Row>
    );
  }
}

PokemonDetail.propTypes = {
  details: PropTypes.array.isRequired,
  detail: PropTypes.object.isRequired,
  spec: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    details: state.details,
    detail: state.detail,
    spec: state.spec
  }
}

export default connect(mapStateToProps)(PokemonDetail);
