/**
 * Created by herisetiawan on 2/16/17.
 */
import pokemonApi from '../api/pokemonApi';
import * as types from './actionTypes';
import _ from 'lodash';

export function loadPokemons() {
  return function(dispatch, getState) {
    return pokemonApi.getAllPokemons(getState().loadParams.next).then(response => {
      dispatch(loadPokemonsSuccess(response));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadPokemonDetail(name) {
  return function(dispatch) {
    return pokemonApi.getPokemonDetail(name).then(response => {
      dispatch(loadPokemonDetailSuccess(response));
    }).catch(error => {
      throw(error);
    });
  };
}

export function setPokemonDetail(detail) {
  return function(dispatch) {
    dispatch({ type: types.SET_POKEMON_DETAIL, detail });
  };
}

export function getPokemonSpec(id) {
  return function(dispatch) {
    dispatch({ type: types.GET_POKEMON_SPEC });
    return pokemonApi.getPokemonSpec(id).then(response => {
      let spec = Object.assign({}, response);
      dispatch({
        type: types.GET_POKEMON_SPEC_SUCCESS,
        spec
      });
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadPokemonsSuccess(response) {
  if(response.detail && response.detail.indexOf('Request was throttled') > -1){
    return;
  }
  return function (dispatch, getState) {
    dispatch(loadParams(
      Object.assign({}, response, {
        hasMore: getState().pokemons.length < response.count
      })
    ));
    dispatch({
      type: types.LOAD_POKEMONS_SUCCESS,
      response
    })
  }
}

export function loadPokemonDetailSuccess(response) {
  return {
    type: types.LOAD_POKEMON_DETAILS_SUCCESS,
    response
  };
}

export function loadParams(response) {
  return {
    type: types.LOAD_PARAMS,
    response
  };
}

export function filterList(text) {
  return function (dispatch, getState) {
    const filteredTypes = _.filter(getState().details,
      detail =>
      _.some(detail.types, {
        'type': {
          'name' : text
        }
      })
    );
    const filteredList = _.flatten(_.map(filteredTypes, detail =>
      _.filter(getState().pokemons, { 'name' : detail.name })
    ));
    const response = {
      text: text,
      list: filteredList
    };
    dispatch({
      type: types.FILTER_LIST,
      response
    })
  }
}
