/**
 * Created by herisetiawan on 2/16/17.
 */
import 'whatwg-fetch';
import config from 'config';

class PokemonApi {
  static getAllPokemons() {
    return fetch(
      config.API_PATH.list,
      {
        headers: {
          'Origin': 'localhost',
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getPokemonDetail(name) {
    return fetch(
      config.API_PATH.detail + name,
      {
        headers: {
          'Origin': 'localhost',
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getPokemonSpec(id) {
    return fetch(
      config.API_PATH.spec + id,
      {
        headers: {
          'Origin': 'localhost',
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default PokemonApi;
