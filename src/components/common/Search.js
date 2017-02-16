/**
 * Created by herisetiawan on 2/16/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import { filterList } from '../../actions/pokemonActions';
import { browserHistory } from 'react-router';

class Search extends React.Component {
  handleOnChange(){
    browserHistory.push('/');
    this.props.dispatch(filterList(this.textFilter.value));
  }

  render(){
    return (
      <form className="form-search menu">
        <input type="search" placeholder="Filter by type" ref={(input) => {this.textFilter = input}} onChange={this.handleOnChange.bind(this)} />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    filter: state.filter
  };
}

export default connect(mapStateToProps)(Search);
