/**
 * Created by herisetiawan on 2/16/17.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/Main';
import PokemonPage from './components/pokemons/PokemonPage';
import PokemonDetail from './components/pokemons/PokemonDetail';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PokemonPage} />
    <Route path="pokemon/:name" component={PokemonDetail} />
  </Route>
);
