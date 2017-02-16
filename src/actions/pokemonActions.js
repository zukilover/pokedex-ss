/**
 * Created by herisetiawan on 2/16/17.
 */
import pokemonApi from '../api/pokemonApi';
import * as types from './actionTypes';

export function loadPokemons() {
  return function(dispatch) {
    return pokemonApi.getAllPokemons().then(response => {
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
  return {
    type: types.LOAD_POKEMONS_SUCCESS,
    response
  };
}

export function loadPokemonDetailSuccess(response) {
  return {
    type: types.LOAD_POKEMON_DETAILS_SUCCESS,
    response
  };
}
