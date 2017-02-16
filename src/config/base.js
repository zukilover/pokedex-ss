'use strict';

// Settings configured here will be merged into the final config object.
const API_URL = 'http://cors-anywhere.herokuapp.com/http://pokeapi.co/api/v2/';
const PER_PAGE = 20;
export default {
  API_PATH: {
    list: API_URL + 'pokemon?limit=' + PER_PAGE,
    detail: API_URL + 'pokemon/',
    spec: API_URL + 'pokemon-species/'
  }
}
