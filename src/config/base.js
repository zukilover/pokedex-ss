'use strict';

// Settings configured here will be merged into the final config object.
const CORS_PROXY = 'http://cors-anywhere.herokuapp.com/';
const API_URL = CORS_PROXY + 'http://pokeapi.co/api/v2/';
const PER_PAGE = 20;
export default {
  CORS_PROXY: CORS_PROXY,
  API_PATH: {
    list: API_URL + 'pokemon?limit=' + PER_PAGE,
    detail: API_URL + 'pokemon/',
    spec: API_URL + 'pokemon-species/'
  }
}
